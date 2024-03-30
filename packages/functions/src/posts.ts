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

const api = new Hono()
  .basePath("/posts")
  .use(logger())
  .get("/", async (c) => {
    const posts = await getPosts.all();
    return c.json(posts);
  })
  .get("/:id{[0-9]+}", async (c) => {
    const id = +c.req.param("id");
    const post = await getPostById.get({ id });
    return post ? c.json(post) : c.notFound();
  })
  .post(
    "/",
    authMiddleware,
    zValidator(
      "form",
      z.object({
        caption: z.string(),
      })
    ),
    async (c) => {
      const userId = c.var.userId;
      const { caption } = c.req.valid("form");
      const sampleImage =
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      const newPost = await createPost
        .values({ caption, userId, image: sampleImage })
        .returning();
      return c.json(newPost, 201);
    }
  )
  .delete("/:id{[0-9]+}", authMiddleware, async (c) => {
    const userId = c.var.userId;
    const id = +c.req.param("id");
    await deletePost.execute({ id, userId });
    return c.json({ message: "Post deleted" });
  });

export const handler = handle(api);

export type PostApiType = typeof api;
