/// <reference path="./.sst/platform/config.d.ts" />

import dotenv from "dotenv";
dotenv.config();

interface APIOpts {
  functionArgs: sst.aws.FunctionArgs;
  routeArgs: sst.aws.ApiGatewayV2RouteArgs;
}

interface API {
  posts: APIOpts;
}

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

    const api: API = {
      posts: {
        functionArgs: {
          handler: "packages/functions/src/posts.handler",
          environment,
        },
        routeArgs: {
          auth: {
            jwt: {
              issuer: "https://snapshare.kinde.com",
              audiences: [KindeAudience],
            },
          },
        },
      },
    };

    const postsApi = new sst.aws.ApiGatewayV2("SnapSharePostsApi");
    postsApi.route("GET /posts", api.posts.functionArgs);
    postsApi.route("GET /posts/{id}", api.posts.functionArgs);
    postsApi.route("POST /posts", api.posts.functionArgs, api.posts.routeArgs);
    postsApi.route(
      "DELETE /posts/{id}",
      api.posts.functionArgs,
      api.posts.routeArgs
    );

    new sst.aws.StaticSite("SnapshareWeb", {
      path: "packages/web",
      build: {
        command: "npm run build",
        output: "dist",
      },
      environment: {
        VITE_POST_API_URL: postsApi.url,
        VITE_KINDE_AUDIENCE: KindeAudience,
      },
    });
  },
});
