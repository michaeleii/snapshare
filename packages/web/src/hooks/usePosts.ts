import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  const { getToken } = useKindeAuth();
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const token = await getToken();
      if (!token) {
        throw new Error("No token found");
      }
      const response = await fetch(
        `${import.meta.env.VITE_POST_API_URL}/posts`,
        {
          headers: {
            Authorization: token,
          },
        },
      );
      return response.json();
    },
  });

  return { posts: data, error, isLoading };
}
