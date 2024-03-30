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

const api = new Hono().basePath("/posts");

api.use(logger());

api.get("/", async (c) => {
  const posts = await getPosts.all();
  return c.json(posts);
});

api.get("/:id", async (c) => {
  const id = +c.req.param("id");
  const post = await getPostById.get({ id });
  return post ? c.json(post) : c.json({ error: "Post not found" }, 404);
});

api.post("/", authMiddleware, async (c) => {
  const userId = c.var.userId;
  const body = await c.req.json();
  const newPost = await createPost.values({ ...body, userId }).returning();
  return c.json(newPost, 201);
});

api.delete("/:id", authMiddleware, async (c) => {
  const userId = c.var.userId;
  const id = +c.req.param("id");
  await deletePost.execute({ id, userId });
  return c.json({ message: "Post deleted" });
});

export const handler = handle(api);
