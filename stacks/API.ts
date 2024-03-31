import { StackContext, Api, StaticSite, Bucket } from "sst/constructs";

export function API({ stack }: StackContext) {
  const postHandler = "src/functions/posts.handler";
  const authHandler = "src/functions/auth.handler";
  const s3Handler = "src/functions/s3.handler";
  const KindeAudience = `snapshare-api-${stack.stage}`;

  const imageUploadsBucket = new Bucket(stack, "images");

  const api = new Api(stack, "api", {
    authorizers: {
      myAuthorizer: {
        type: "jwt",
        jwt: {
          issuer: "https://snapshare.kinde.com",
          audience: [KindeAudience],
        },
      },
    },
    defaults: {
      authorizer: "myAuthorizer",
      function: {
        environment: {
          TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN!,
          TURSO_CONNECTION_URL: process.env.TURSO_CONNECTION_URL!,
        },
      },
    },
    routes: {
      "GET /posts": { authorizer: "none", function: { handler: postHandler } },
      "GET /posts/{id}": {
        authorizer: "none",
        function: { handler: postHandler },
      },
      "POST /posts": postHandler,
      "DELETE /posts/{id}": postHandler,
      "POST /register": authHandler,
      "POST /signed-url": {
        authorizer: "none",
        function: { handler: s3Handler },
      },
    },
  });

  api.attachPermissionsToRoute("POST /signed-url", [
    imageUploadsBucket,
    "grantPut",
  ]);

  const web = new StaticSite(stack, "web", {
    path: "packages/web",
    buildOutput: "dist",
    buildCommand: "npm run build",
    environment: {
      VITE_API_URL: api.url,
      VITE_KINDE_AUDIENCE: KindeAudience,
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
    WebsiteURL: web.url,
  });
}
