import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

import { posts } from "@snapshare/core/db/schema/posts";
import { db } from "@snapshare/core/db";

interface Post {
  id: number;
  title: string;
  content: string;
}

const api = new Hono().basePath("/posts");

api.get("/", async (c) => {
  db.select().from(posts).then();
});

api.get("/:id", (c) => {
  const id = +c.req.param("id");
  const post = fakePosts.find((p) => p.id === id);
  return !post ? c.json({ error: "Post not found" }, 404) : c.json(post);
});

api.post("/", async (c) => {
  const body = await c.req.json();
  const id = fakePosts.length;
  body.id = id;
  fakePosts.push(body);
  return c.json(body, 201);
});

api.delete("/:id", (c) => {
  const id = +c.req.param("id");
  const index = fakePosts.findIndex((p) => p.id === id);
  if (index === -1) {
    return c.json({ error: "Post not found" }, 404);
  }
  fakePosts.splice(index, 1);
  return c.json({ message: "Post deleted" });
});

export const handler = handle(api);
