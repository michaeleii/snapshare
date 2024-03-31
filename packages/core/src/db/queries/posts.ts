import { and, desc, eq, sql } from "drizzle-orm";
import { db } from "..";
import { posts } from "../schema/posts";
import { users } from "../schema/users";

const baseQuery = db
  .select({
    id: posts.id,
    image: posts.image,
    caption: posts.caption,
    createdAt: posts.createdAt,
    user: {
      id: users.id,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
    },
  })
  .from(posts)
  .leftJoin(users, eq(users.id, posts.userId));

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
