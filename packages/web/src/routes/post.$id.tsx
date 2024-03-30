import { Button } from "@/components/ui/button";
import { postQueryOptions } from "@/post.QueryOptions";
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  createFileRoute,
  useRouter,
  ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/post/$id")({
  loader: ({ context: { queryClient }, params: { id } }) => {
    return queryClient.ensureQueryData(postQueryOptions(id));
  },
  component: PostComponent,
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  const router = useRouter();

  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Button
        onClick={() => {
          router.invalidate();
        }}
      >
        retry
      </Button>
      <div>An error occurred. Please Try again!</div>
    </div>
  );
}

function PostComponent() {
  const id = Route.useParams().id;
  const { data: post } = useSuspenseQuery(postQueryOptions(id));

  return (
    <div className="flex h-dvh items-center justify-center gap-2">
      <article className="flex flex-wrap justify-center">
        <div className="mx-auto mb-2 flex w-full max-w-[468px] items-start justify-start gap-2 md:hidden">
          <img
            src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm font-bold">{post.userId}</span>
        </div>
        <img
          className="aspect-[4/5] w-full max-w-[468px] rounded-md rounded-b-none border border-black/20 md:rounded-r-none"
          src="https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="w-full max-w-[468px] md:w-auto md:border">
          <div className="hidden items-start gap-2 border-b p-4 md:flex">
            <img
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm font-bold">{post.userId}</span>
          </div>

          <div className="px-2 pb-6 pt-4">
            <div className="flex items-end gap-2">
              <span className="text-sm">{post.caption}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
