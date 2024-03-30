import { Post } from "@core/db/queries/posts";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_POST_API_URL}/posts`,
      );
      return response.json() as Promise<Post[]>;
    },
  });

  return { posts: data, error, isLoading };
}
