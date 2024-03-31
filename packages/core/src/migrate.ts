import { migrate } from "drizzle-orm/libsql/migrator";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

(async () => {
  const client = createClient({
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  const db = drizzle(client);

  await migrate(db, { migrationsFolder: "./migrations" });

  await client.close();
})();
