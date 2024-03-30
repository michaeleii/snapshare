import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_POST_API_URL}/posts`,
      );
      return response.json();
    },
  });

  return { posts: data, error, isLoading };
}
