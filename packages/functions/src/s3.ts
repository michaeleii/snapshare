import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { logger } from "hono/logger";
import { authMiddleware } from "@snapshare/core/middlewares/auth";

import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { Resource } from "sst";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const api = new Hono();

api.use(logger());

api.post(
  "/signed-url",
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
    // generate a s3 signed url

    return c.json({}, 201);
  }
);

export const handler = handle(api);
