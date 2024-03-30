import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export function useCreatePost() {
  const navigate = useNavigate({ from: "/create" });
  const { mutate, error, isPending } = useMutation({
    mutationFn: async ({
      caption,
      image,
    }: {
      caption: string;
      image: string;
    }) => {
      await fetch(`${import.meta.env.VITE_POST_API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caption, image }),
      });
    },
    onSuccess: () => {
      navigate({ to: "/" });
    },
  });

  return { createPost: mutate, error, isCreating: isPending };
}
