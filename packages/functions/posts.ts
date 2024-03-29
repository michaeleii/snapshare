import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const posts = new Hono().basePath("/posts");

posts.get("/", (c) => c.text("Hello Hono!"));

export const handler = handle(posts);
