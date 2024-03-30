import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export function useDeletePost() {
  const { getToken } = useKindeAuth();
  const navigate = useNavigate();
  const { mutate, error, isPending } = useMutation({
    mutationFn: async (id: number) => {
      const token = await getToken();
      if (!token) {
        throw new Error("No token found.");
      }
      await fetch(`${import.meta.env.VITE_POST_API_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      navigate({ to: "/" });
    },
  });

  return { deletePost: mutate, error, isDeleting: isPending };
}
