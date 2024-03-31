import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export function useCreatePost() {
  const { getToken } = useKindeAuth();
  const navigate = useNavigate({ from: "/create" });
  const { mutate, error, isPending } = useMutation({
    mutationFn: async ({
      caption,
      image,
    }: {
      caption: string;
      image: string;
    }) => {
      const token = await getToken();
      if (!token) {
        throw new Error("No token found.");
      }
      await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: "POST",
        headers: {
          Authorization: token,
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
