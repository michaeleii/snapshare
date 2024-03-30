import { Post } from "@core/db/queries/posts";
import { useQuery } from "@tanstack/react-query";

export function usePost(id: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_POST_API_URL}/${id}`);
      return res.json() as Promise<Post>;
    },
  });
  return { post: data, isLoading, error };
}
