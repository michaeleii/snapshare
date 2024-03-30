import { Post } from "@core/db/queries/posts";
import { queryOptions } from "@tanstack/react-query";

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${import.meta.env.VITE_POST_API_URL}/posts`);
  return res.json();
}

export const postsQueryOptions = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });
