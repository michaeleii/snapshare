import { sql } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const posts = sqliteTable(
  "posts",
  {
    id: integer("id").primaryKey(),
    userId: integer("userId"),
    title: text("title", { length: 255 }),
    content: text("content", { length: 1000 }),
    createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`),
  },
  (posts) => ({
    userIdx: uniqueIndex("userIdx").on(posts.userId),
  })
);
