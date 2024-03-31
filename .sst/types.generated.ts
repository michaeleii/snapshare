import "sst"
declare module "sst" {
  export interface Resource {
    SnapShareApi: {
      url: string
      type: "sst.aws.ApiGatewayV2"
    }
    SnapshareAssets: {
      name: string
      type: "sst.aws.Bucket"
    }
    SnapshareWeb: {
      type: "sst.aws.StaticSite"
      url: string
    }
  }
}
export {}