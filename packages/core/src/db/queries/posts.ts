import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "..";
import { posts } from "../schema/posts";

const baseQuery = db.select().from(posts);

export const getPosts = baseQuery.orderBy(desc(posts.createdAt)).prepare();

export const getPostById = baseQuery
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
