/// <reference path="./.sst/platform/config.d.ts" />

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
    // Posts
    const posts = {
      api: new sst.aws.ApiGatewayV2("SnapSharePostsApi"),
      handler: "packages/functions/posts.handler",
    };
    posts.api.route("GET /posts", posts.handler);
    posts.api.route("GET /posts/{id}", posts.handler);
    posts.api.route("POST /posts", posts.handler);
    posts.api.route("DELETE /posts/{id}", posts.handler);
  },
});
