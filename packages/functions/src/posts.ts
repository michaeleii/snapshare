import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

import {
  getPosts,
  getPostById,
  createPost,
  deletePost,
} from "@snapshare/core/db/queries/posts";

const api = new Hono().basePath("/posts");

api.get("/", async (c) => {
  const posts = await getPosts.all();
  return c.json({ posts });
});

api.get("/:id", async (c) => {
  const id = +c.req.param("id");
  const post = await getPostById.get({ id });
  return post ? c.json({ post }) : c.json({ error: "Post not found" }, 404);
});

api.post("/", async (c) => {
  const body = await c.req.json();
  const newPost = await createPost.values(body).returning();
  return c.json({ post: newPost }, 201);
});

api.delete("/:id", async (c) => {
  const id = +c.req.param("id");
  await deletePost.get({ id });
  c.json({ message: "Post deleted" });
});

export const handler = handle(api);
