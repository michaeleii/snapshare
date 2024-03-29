import { eq, sql } from "drizzle-orm";
import { db } from "..";
import { posts } from "../schema/posts";

export const getAllPosts = db.select().from(posts).prepare();

export const getPostById = db
  .select()
  .from(posts)
  .where(eq(posts.id, sql.placeholder("id")))
  .prepare();

export const createPost = db.insert(posts);

export const deletePost = db
  .delete(posts)
  .where(eq(posts.id, sql.placeholder("id")))
  .prepare();
