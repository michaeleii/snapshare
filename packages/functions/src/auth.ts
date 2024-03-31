import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { logger } from "hono/logger";

import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db } from "@snapshare/core/db";
import { users } from "@snapshare/core/db/schema/users";
import { eq } from "drizzle-orm";

const api = new Hono();

api.use(logger());

api.post(
  "/register",
  zValidator(
    "json",
    z.object({
      kindeId: z.string(),
      avatar: z.string(),
      email: z.string().nullable(),
      firstName: z.string().nullable(),
      lastName: z.string().nullable(),
    })
  ),
  async (c) => {
    const user = c.req.valid("json");
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.kindeId, user.kindeId));

    if (existingUser.at(0)) {
      return c.json({ message: "Already registered" }, 200);
    }

    await db.insert(users).values({
      avatar: user.avatar,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      kindeId: user.kindeId,
    });
    return c.json({ message: "New User Created" });
  }
);

export const handler = handle(api);
