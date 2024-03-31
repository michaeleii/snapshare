import { defineConfig } from "drizzle-kit";
// import * as dotenv from "dotenv";
// dotenv.config({ path: "../../.env" });

export default defineConfig({
  schema: "./src/db/schema/*",
  out: "./migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
});
