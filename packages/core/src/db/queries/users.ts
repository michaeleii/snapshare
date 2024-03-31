import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../db/schema/users";
import { sql } from "drizzle-orm";

export const getUser = db
  .select()
  .from(users)
  .where(eq(users.kindeId, sql.placeholder("kindeId")))
  .prepare();
