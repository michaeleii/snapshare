import { PostApiType } from "@functions/posts";
import { hc } from "hono/client";

export const postApi = hc<PostApiType>(import.meta.env.VITE_POST_API_URL);
