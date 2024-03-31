import { fetchPost } from "./posts";

export const postQueryOptions = (id: string) => ({
  queryKey: ["posts", { id }],
  queryFn: () => fetchPost(id),
});
