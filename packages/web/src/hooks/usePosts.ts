import { postApi } from "@/client";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await postApi.posts.$get({
        fetch,
      });
      await res.json();
    },
  });

  return { posts: data, error, isLoading };
}
