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

    const apiOpts = {
      posts: {
        functionArgs: {
          handler: "packages/functions/src/posts.handler",
          environment,
        },
      },
      routeArgs: {
        auth: {
          jwt: {
            issuer: "https://snapshare.kinde.com",
            audiences: [KindeAudience],
          },
        },
      },
    };

    const assetsBucket = new sst.aws.Bucket("SnapshareAssets");

    const api = new sst.aws.ApiGatewayV2("SnapShareApi");
    api.route("GET /posts", apiOpts.posts.functionArgs);
    api.route("GET /posts/{id}", apiOpts.posts.functionArgs);
    api.route("POST /posts", apiOpts.posts.functionArgs, apiOpts.routeArgs);
    api.route(
      "DELETE /posts/{id}",
      apiOpts.posts.functionArgs,
      apiOpts.routeArgs
    );

    api.route("POST /register", "packages/functions/src/auth.handler");

    api.route(
      "POST /signed-url",
      "packages/functions/src/s3.handler",
      apiOpts.routeArgs
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
