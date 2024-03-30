import { Post } from "@core/db/queries/posts";
import { queryOptions } from "@tanstack/react-query";

async function fetchPost(id: number): Promise<Post> {
  const res = await fetch(`${import.meta.env.VITE_POST_API_URL}/${id}`);
  return res.json();
}

export const postQueryOptions = (id: number) =>
  queryOptions({
    queryKey: ["posts", { id }],
    queryFn: () => fetchPost(id),
  });
