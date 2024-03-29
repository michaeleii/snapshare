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
    const api = new sst.aws.ApiGatewayV2("snapshare-api");

    // Posts
    const postHandler = "packages/functions/posts.handler";
    api.route("GET /posts/ui", postHandler);
    api.route("GET /posts", postHandler);
    api.route("GET /posts/:id", postHandler);
    api.route("POST /posts", postHandler);
    api.route("DELETE /posts/:id", postHandler);
  },
});
