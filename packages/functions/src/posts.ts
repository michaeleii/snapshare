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

api.delete("/:id{[0-9]+}", authMiddleware, async (c) => {
  const userId = +c.var.userId;
  const id = +c.req.param("id");

  await deletePost.all({ id, userId });

  return c.json({ message: "Post deleted" });
});

export const handler = handle(api);
