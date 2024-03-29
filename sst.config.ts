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
    const environment = {
      TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL!,
    };
    // Posts
    const posts = {
      api: new sst.aws.ApiGatewayV2("SnapSharePostsApi"),
      handler: { handler: "packages/functions/src/posts.handler", environment },
    };
    posts.api.route("GET /posts", posts.handler);
    posts.api.route("GET /posts/{id}", posts.handler);
    posts.api.route("POST /posts", posts.handler);
    posts.api.route("DELETE /posts/{id}", posts.handler);
  },
});
