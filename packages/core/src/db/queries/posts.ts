import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "..";
import { posts } from "../schema/posts";

export const getPosts = db
  .select()
  .from(posts)
  .orderBy(desc(posts.createdAt))
  .prepare();

export const getPostById = db
  .select()
  .from(posts)
  .where(eq(posts.id, sql.placeholder("id")))
  .prepare();

export const createPost = db.insert(posts);

export const deletePost = db
  .delete(posts)
  .where(
    and(
      eq(posts.id, sql.placeholder("id")),
      eq(posts.userId, sql.placeholder("userId"))
    )
  )
  .prepare();

export type Post = Awaited<ReturnType<typeof getPosts.all>>[0];
