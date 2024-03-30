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
    const audience = `snapshare-api-${$app.stage}`;
    const environment = {
      TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL!,
    };

    interface API {
      api: sst.aws.ApiGatewayV2;
      functionArgs: sst.aws.FunctionArgs;
      routeArgs: sst.aws.ApiGatewayV2RouteArgs;
    }
    // Posts
    const posts: API = {
      api: new sst.aws.ApiGatewayV2("SnapSharePostsApi"),
      functionArgs: {
        handler: "packages/functions/src/posts.handler",
        environment,
      },
      routeArgs: {
        auth: {
          jwt: {
            issuer: "https://snapshare.kinde.com",
            audiences: [audience],
          },
        },
      },
    };
    posts.api.route("GET /posts", posts.functionArgs, posts.routeArgs);
    posts.api.route("GET /posts/{id}", posts.functionArgs, posts.routeArgs);
    posts.api.route("POST /posts", posts.functionArgs, posts.routeArgs);
    posts.api.route("DELETE /posts/{id}", posts.functionArgs, posts.routeArgs);

    new sst.aws.StaticSite("SnapshareWeb", {
      path: "packages/web",
      build: {
        command: "npm run build",
        output: "dist",
      },
      environment: {
        VITE_POST_API_URL: posts.api.url,
        VITE_KINDE_AUDIENCE: audience,
      },
    });
  },
});
