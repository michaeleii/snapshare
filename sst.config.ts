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

    const routeArgs = {
      auth: {
        jwt: {
          issuer: "https://snapshare.kinde.com",
          audiences: [KindeAudience],
        },
      },
    };

    const postHandler = "packages/functions/src/posts.handler";
    const authHandler = "packages/functions/src/auth.handler";
    const s3Handler = "packages/functions/src/s3.handler";

    const assetsBucket = new sst.aws.Bucket("SnapshareAssets");

    const api = new sst.aws.ApiGatewayV2("SnapShareApi")
      .route("GET /posts", { handler: postHandler, environment })
      .route("GET /posts/{id}", { handler: postHandler, environment })
      .route("POST /posts", { handler: postHandler, environment }, routeArgs)
      .route(
        "DELETE /posts/{id}",
        { handler: postHandler, environment },
        routeArgs
      )
      .route("POST /register", {
        handler: authHandler,
        environment,
      })
      .route(
        "POST /signed-url",
        {
          handler: s3Handler,
          environment: {
            TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL!,
            BUCKET_NAME: assetsBucket.name,
          },
          link: [assetsBucket],
        },
        routeArgs
      );

    new sst.aws.StaticSite("SnapshareWeb", {
      path: "packages/web",
      build: {
        command: "npm run build",
        output: "packages/web/dist",
      },
      environment: {
        VITE_API_URL: api.url,
        VITE_KINDE_AUDIENCE: KindeAudience,
      },
    });
  },
});
