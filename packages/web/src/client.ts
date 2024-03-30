import { type PostApiType } from "@functions/posts";
import { hc } from "hono/client";

export const postApi = hc<PostApiType>(
  "https://a5uzo4f60j.execute-api.us-west-2.amazonaws.com/",
);
