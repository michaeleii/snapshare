import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { swaggerUI } from "@hono/swagger-ui";

interface Post {
  id: number;
  title: string;
  content: string;
}

const fakePosts: Post[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  title: `Post ${i}`,
  content: `This is the content of post ${i}`,
}));

const posts = new Hono().basePath("/posts");

posts.get("/ui", swaggerUI({ url: "/doc" }));

posts.get("/", (c) => c.json(fakePosts));

posts.get("/:id", (c) => {
  const id = +c.req.param("id");
  const post = fakePosts.find((p) => p.id === id);
  return !post ? c.json({ error: "Post not found" }, 404) : c.json(post);
});

posts.post("/", async (c) => {
  const body = await c.req.json();
  fakePosts.push(body);
  return c.json(body, 201);
});

posts.delete("/:id", (c) => {
  const id = +c.req.param("id");
  const index = fakePosts.findIndex((p) => p.id === id);
  if (index === -1) {
    return c.json({ error: "Post not found" }, 404);
  }
  fakePosts.splice(index, 1);
  return c.json({ message: "Post deleted" });
});

export const handler = handle(posts);
