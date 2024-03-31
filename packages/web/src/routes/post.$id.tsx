import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeletePost } from "@/hooks/useDeletePost";
import { postQueryOptions } from "@/queries/posts/post.QueryOptions";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  createFileRoute,
  useRouter,
  ErrorComponentProps,
} from "@tanstack/react-router";
import { MoreHorizontal } from "lucide-react";
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
        Rerty
      </Button>
      <div>An error occurred. Please Try again!</div>
    </div>
  );
}

function PostComponent() {
  const { user } = useKindeAuth();
  const id = Route.useParams().id;
  const { data: post } = useSuspenseQuery(postQueryOptions(id));

  return (
    <div className=".main flex h-full items-center justify-center gap-2 px-2">
      <article className="flex flex-col justify-center md:flex-row">
        <div className="mx-auto mb-2 flex w-full max-w-[468px] flex-wrap items-center justify-start gap-2 md:hidden">
          <img
            src={
              post.user?.avatar ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm font-bold">
            {post.user?.firstName} {post.user?.lastName}
          </span>
          {user?.id && post.user.kindeId === user.id && (
            <div className="ml-auto">
              <UserActions />
            </div>
          )}
        </div>
        <img
          className="aspect-[4/5] w-full max-w-[468px] rounded-md rounded-b-none border border-black/20 md:rounded-r-none"
          src={post.image}
        />
        <div className="w-[300px] rounded-r-md md:border">
          <div className="hidden items-center gap-2 border-b p-4 md:flex">
            <img
              src={
                post.user?.avatar ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm font-bold">
              {post.user?.firstName} {post.user?.lastName}
            </span>
            <div className="ml-auto">
              <UserActions />
            </div>
          </div>

          <div className="pl-2 pt-4 md:p-4">
            <div className="flex items-end gap-2">
              <span className="text-sm">{post.caption}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

function UserActions() {
  const id = Route.useParams().id;
  const { deletePost, isDeleting } = useDeletePost();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem
          disabled={isDeleting}
          className="text-destructive focus:bg-destructive/80 focus:text-white"
          onClick={() => deletePost(id)}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
