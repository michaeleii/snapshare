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
      kindeId: users.kindeId,
      avatar: users.avatar,
      firstName: users.firstName,
      lastName: users.lastName,
      email: users.email,
    },
  })
  .from(posts)
  .innerJoin(users, eq(users.id, posts.userId));

export const getPosts = baseQuery.orderBy(desc(posts.createdAt)).prepare();

export const getPostById = baseQuery
  .where(eq(posts.id, sql.placeholder("id")))
  .prepare();

export const createPost = db.insert(posts);

export type Post = Awaited<ReturnType<typeof getPosts.all>>[0];
