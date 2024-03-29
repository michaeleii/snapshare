import { db } from ".";

async function seedDB() {
  // Insert 10 fake posts

  await db..insertMany([
    { title: "Hello, World!", content: "This is my first post" },
    { title: "Hello, Again!", content: "This is my second post" },
    { title: "Goodbye!", content: "This is my last post" },
  ]);
}
