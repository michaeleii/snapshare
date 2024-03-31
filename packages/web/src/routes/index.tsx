import PostCard from "@/components/post-card";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { postsQueryOptions } from "@/queries/posts/posts.QueryOptions";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
  component: Index,
});

function Index() {
  const postsQuery = useSuspenseQuery(postsQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="mx-auto max-w-[468px] divide-y px-2">
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="flex h-dvh items-center justify-center">
          No Posts yet.
        </div>
      )}
    </div>
  );
}
