import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

interface Post {
  id: number;
  title: string;
  content: string;
}

const fakePosts: Post[] = [
  {
    id: 0,
    title: "Hello, World!",
    content: "This is my first post",
  },
  {
    id: 1,
    title: "Hello, Again!",
    content: "This is my second post",
  },
  {
    id: 2,
    title: "Goodbye!",
    content: "This is my last post",
  },
];

const posts = new Hono().basePath("/posts");

posts.get("/", (c) => c.json(fakePosts));

posts.get("/:id", (c) => {
  const id = +c.req.param("id");
  const post = fakePosts.find((p) => p.id === id);
  return !post ? c.json({ error: "Post not found" }, 404) : c.json(post);
});

posts.post("/", async (c) => {
  const body = await c.req.json();
  const id = fakePosts.length;
  body.id = id;
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
