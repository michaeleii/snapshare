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
import { getUser } from "../db/queries/users";

export const authMiddleware = createMiddleware<AuthEnv>(async (c, next) => {
  const userId = c.env.event.requestContext.authorizer?.jwt?.claims?.sub;
  if (!userId) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const user = await getUser.get({ id: userId });

  if (!user) {
    return c.json({ error: "Invalid User" }, 401);
  }

  c.set("userId", user.id.toString());
  await next();
});
