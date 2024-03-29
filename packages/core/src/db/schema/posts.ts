import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable(
  "posts",
  {
    id: integer("id").notNull().primaryKey(),
    userId: text("user_id").notNull(),
    title: text("title", { length: 255 }).notNull(),
    content: text("content", { length: 1000 }).notNull(),
    createdAt: text("created_at")
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
  },
  (table) => {
    return {
      userIdIdx: index("user_id_idx").on(table.userId),
    };
  }
);
