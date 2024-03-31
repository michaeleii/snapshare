import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

const computeSHA256 = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
};

export function useCreatePost() {
  const { getToken } = useKindeAuth();
  const navigate = useNavigate({ from: "/create" });
  const { mutate, error, isPending } = useMutation({
    mutationFn: async ({
      caption,
      image,
    }: {
      caption: string;
      image: File;
    }) => {
      const token = await getToken();
      if (!token) {
        throw new Error("No token found.");
      }
      const signedURLResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/signed-url`,
        {
          method: "POST",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contentType: image.type,
            contentLength: image.size,
            checksum: await computeSHA256(image),
          }),
        },
      );
      if (!signedURLResponse.ok) {
        throw new Error("An error occurred while creating post");
      }

      const { url }: { url: string } = await signedURLResponse.json();
      // console.log(url);
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": image.type,
        },
        body: image,
      });

      const imageURL = url.split("?")[0];

      console.log({ imageURL });

      // await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
      //   method: "POST",
      //   headers: {
      //     Authorization: token,
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ caption, image }),
      // });
    },
    onSuccess: () => {
      navigate({ to: "/" });
    },
  });

  return { createPost: mutate, error, isCreating: isPending };
}
