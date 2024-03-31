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
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { db } from "@snapshare/core/db";
import { posts } from "@snapshare/core/db/schema/posts";
import { and, eq } from "drizzle-orm";

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

    const [newPost] = await createPost
      .values({ caption, userId, image })
      .returning();

    return c.json(newPost, 201);
  }
);

const s3 = new S3Client({});

api.delete("/:id{[0-9]+}", authMiddleware, async (c) => {
  const userId = +c.var.userId;
  const id = +c.req.param("id");

  const post = await getPostById.get({ id });

  if (!post) {
    return c.json({ error: "Post not found" }, 400);
  }

  if (post.user.id !== userId) {
    return c.json({ error: "You don't have permission to delete this" }, 403);
  }

  const deletedPost = await db
    .delete(posts)
    .where(and(eq(posts.id, id), eq(posts.userId, userId)))
    .returning()
    .then((p) => p[0]);

  if (!deletedPost) {
    return c.json({ error: "Error deleting the post" }, 500);
  }

  const deleteCommand = new DeleteObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: deletedPost.image.split("/").pop(),
  });

  await s3.send(deleteCommand);

  return c.json({ message: "Post deleted" });
});

export const handler = handle(api);
