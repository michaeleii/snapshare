import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/create")({
  component: Create,
});

function Create() {
  return (
    <div className="mx-auto max-w-[468px] px-2 pt-10">
      <h1 className="mb-4 text-2xl font-bold">Create Post</h1>
      <CreatePostForm />
    </div>
  );
}
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { X } from "lucide-react";
import { useCreatePost } from "@/hooks/useCreatePost";
import FormSubmitButton from "@/components/form-submit.button";

const createPostFormSchema = z.object({
  caption: z.string().min(1, "Please enter a caption.").max(2200),
  // image: z.any().refine((file) => {
  //   return file instanceof FileList && file.length > 0;
  // }, "Please upload an image."),
  image: z
    .instanceof(FileList, {
      message: "Please upload an image",
    })
    .refine((val) => val.length > 0, "Please upload an image"),
});

type CreatePostFormSchema = z.infer<typeof createPostFormSchema>;
function CreatePostForm() {
  const { createPost, isCreating } = useCreatePost();
  const form = useForm<CreatePostFormSchema>({
    resolver: zodResolver(createPostFormSchema),
    defaultValues: {
      caption: "",
      image: undefined,
    },
  });
  const [filePreviewURL, setFilePreviewURL] = useState<string | undefined>();

  const imageRef = form.register("image");

  // 2. Define a submit handler.
  function onSubmit({ caption, image }: CreatePostFormSchema) {
    createPost({
      caption,
      image: image[0],
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {filePreviewURL && (
          <div className="relative">
            <img src={filePreviewURL} className="w-full rounded-md" />
            <X
              className="absolute right-2 top-1 cursor-pointer text-red-500 animate-in"
              onClick={() => {
                URL.revokeObjectURL(filePreviewURL);
                setFilePreviewURL(undefined);
                form.resetField("image");
              }}
            />
          </div>
        )}
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormControl>
                <Input
                  accept="image/*"
                  type="file"
                  {...imageRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (filePreviewURL) {
                      URL.revokeObjectURL(filePreviewURL);
                    }
                    if (file) {
                      const url = URL.createObjectURL(file);
                      setFilePreviewURL(url);
                    } else {
                      setFilePreviewURL(undefined);
                    }
                    imageRef.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Write a caption for your post..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormSubmitButton
          disabled={isCreating}
          loadingValue="Creating Post..."
          value="Create"
          className="w-full"
        />
      </form>
    </Form>
  );
}
