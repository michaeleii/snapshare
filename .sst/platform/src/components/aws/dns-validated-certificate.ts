import { ComponentResourceOptions, output } from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { Component } from "../component";
import { sanitizeToPascalCase } from "../naming";
import { Input } from "../input.js";

/**
 * Properties to create a DNS validated certificate managed by AWS Certificate Manager.
 */
export interface DnsValidatedCertificateArgs {
  /**
   * The fully qualified domain name in the certificate.
   */
  domainName: Input<string>;
  /**
   * Route 53 Hosted Zone used to perform DNS validation of the request.  The zone
   * must be authoritative for the domain name specified in the Certificate Request.
   */
  zoneId: Input<string>;
  /**
   * Set of domains that should be SANs in the issued certificate
   */
  alternativeNames?: Input<string[]>;
}

export class DnsValidatedCertificate extends Component {
  public certificateValidation: aws.acm.CertificateValidation;

  constructor(
    name: string,
    args: DnsValidatedCertificateArgs,
    opts?: ComponentResourceOptions,
  ) {
    super("sst:aws:Certificate", name, args, opts);

    const parent = this;
    const { domainName, alternativeNames, zoneId } = args;

    const certificate = output(zoneId).apply((zoneId) => {
      return new aws.acm.Certificate(
        `${name}Certificate`,
        {
          domainName,
          validationMethod: "DNS",
          subjectAlternativeNames: alternativeNames ?? [],
        },
        { parent },
      );
    });

    const records = certificate.domainValidationOptions.apply((options) =>
      options.map((option) => {
        return new aws.route53.Record(
          `${name}Record${sanitizeToPascalCase(option.resourceRecordName)}`,
          {
            name: option.resourceRecordName,
            zoneId,
            type: option.resourceRecordType,
            records: [option.resourceRecordValue],
            ttl: 60,
          },
          { parent },
        );
      }),
    );

    const certificateValidation = new aws.acm.CertificateValidation(
      `${name}Validation`,
      {
        certificateArn: certificate.arn,
        validationRecordFqdns: records.apply((records) =>
          records.map((record) => record.fqdn),
        ),
      },
      { parent },
    );

    this.certificateValidation = certificateValidation;
  }

  public get arn() {
    return this.certificateValidation.certificateArn;
  }
}
