// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

import dotenv from "dotenv";
dotenv.config();

export default $config({
  app(input) {
    return {
      name: "snapshare",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-west-2",
        },
      },
    };
  },
  async run() {
    const KindeAudience = `snapshare-api-${$app.stage}`;

    const environment = {
      TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL!,
    };

    const auth = {
      jwt: {
        issuer: "https://snapshare.kinde.com",
        audiences: [KindeAudience],
      },
    };

    const postHandler = "src/functions/posts.handler";
    const authHandler = "src/functions/auth.handler";
    const s3Handler = "src/functions/s3.handler";

    const assetsBucket = new sst.aws.Bucket("SnapshareAssets");

    const api = new sst.aws.ApiGatewayV2("SnapShareApi");

    api.route("GET /posts", { handler: postHandler, environment });
    api.route("GET /posts/{id}", { handler: postHandler, environment });
    api.route("POST /posts", { handler: postHandler, environment }, { auth });
    api.route(
      "DELETE /posts/{id}",
      { handler: postHandler, environment },
      { auth },
    );

    api.route("POST /register", {
      handler: authHandler,
      environment,
    });
    api.route(
      "POST /signed-url",
      {
        handler: "src/functions/s3.handler",
        environment: {
          TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL!,
        },
        link: [assetsBucket],
        // permissions: [
        //   {
        //     actions: ["s3:PutObject", "s3:Abort"],
        //     resources: [assetsBucket.arn],
        //   },
        // ],
      },
      { auth },
    );

    new sst.aws.StaticSite("SnapshareWeb", {
      build: {
        command: "npm run build",
        output: "dist",
      },
      environment: {
        VITE_API_URL: api.url,
        VITE_KINDE_AUDIENCE: KindeAudience,
      },
    });
  },
});
