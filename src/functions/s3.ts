import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { logger } from "hono/logger";
import { authMiddleware } from "@/middlewares/auth";

import * as crypto from "crypto";

import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const api = new Hono();

const s3 = new S3Client({});

const randomString = (length: number) =>
  crypto.randomBytes(length).toString("hex");

api.use(logger());

api.post(
  "/signed-url",
  authMiddleware,
  zValidator(
    "json",
    z.object({
      contentType: z.string(),
      contentLength: z.number(),
      checksum: z.string(),
    }),
  ),
  async (c) => {
    const { contentType, contentLength, checksum } = c.req.valid("json");

    if (contentLength > 1024 * 1024 * 10) {
      return c.json({ error: "File is too large" }, 400);
    }

    const imageName = randomString(16);
    // generate a s3 signed url
    const putCommand = new PutObjectCommand({
      ACL: "public-read",
      Bucket: process.env.BUCKET_NAME,
      Key: imageName,
      ContentType: contentType,
      ContentLength: contentLength,
      ChecksumSHA256: checksum,
    });

    const url = await getSignedUrl(s3, putCommand, { expiresIn: 60 * 50 });
    return c.json({ url });
  },
);

export const handler = handle(api);
