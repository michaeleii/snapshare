import { LambdaContext, LambdaEvent } from "hono/aws-lambda";
import { createMiddleware } from "hono/factory";

type AuthEnv = {
  Variables: {
    userId: string;
  };
  Bindings: {
    event: LambdaEvent & {
      requestContext: {
        authorizer?: {
          jwt?: {
            claims?: {
              sub?: string;
            };
          };
        };
      };
    };
    context: LambdaContext;
  };
};
export const authMiddleware = createMiddleware<AuthEnv>(async (c, next) => {
  const userId = c.env.event.requestContext.authorizer?.jwt?.claims?.sub;
  if (!userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  c.set("userId", userId);
  await next();
});
