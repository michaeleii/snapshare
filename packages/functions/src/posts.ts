import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { logger } from "hono/logger";
import { authMiddleware } from "@snapshare/core/middlewares/auth";

import {
  getPosts,
  getPostById,
  createPost,
  deletePost,
} from "@snapshare/core/db/queries/posts";

import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { db } from "@snapshare/core/db";
import { users } from "@snapshare/core/db/schema/users";
import { eq } from "drizzle-orm";

const api = new Hono().basePath("/posts");

api.use(logger());

api.get("/", async (c) => {
  const posts = await getPosts.all();
  return c.json(posts);
});

api.get("/:id{[0-9]+}", async (c) => {
  const id = +c.req.param("id");
  const post = await getPostById.get({ id });
  return post ? c.json(post) : c.notFound();
});

api.post(
  "/",
  authMiddleware,
  zValidator(
    "json",
    z.object({
      caption: z.string(),
      image: z.string(),
    })
  ),
  async (c) => {
    const userId = +c.var.userId;
    const { caption, image } = c.req.valid("json");

    const newPost = await createPost
      .values({ caption, userId, image })
      .returning();

    return c.json(newPost, 201);
  }
);

api.delete("/:id{[0-9]+}", authMiddleware, async (c) => {
  const userId = +c.var.userId;
  const id = +c.req.param("id");

  await deletePost.all({ id, userId });

  return c.json({ message: "Post deleted" });
});

api.post(
  "/auth",
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
    const existingUser = db
      .select()
      .from(users)
      .where(eq(users.kindeId, user.kindeId));
    if (!existingUser) {
      return c.status(204);
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
