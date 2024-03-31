import { eq } from "drizzle-orm";
import { db } from "..";
import { users } from "../schema/users";
import { sql } from "drizzle-orm";

export const getUser = db
  .select()
  .from(users)
  .where(eq(users.kindeId, sql.placeholder("kindeId")))
  .prepare();
