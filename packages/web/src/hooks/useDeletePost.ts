import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export function useDeletePost() {
  const navigate = useNavigate();
  const { mutate, error, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await fetch(`${import.meta.env.VITE_POST_API_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
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
