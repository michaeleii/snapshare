import PostCard from "@/components/post-card";
import { usePosts } from "@/hooks/usePosts";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { posts, isLoading, error } = usePosts();

  return (
    <div className="mx-auto max-w-[468px] divide-y px-2">
      {isLoading ? (
        <div className="flex h-dvh items-center justify-center">Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : posts && posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="flex h-dvh items-center justify-center">
          No Posts yet.
        </div>
      )}
    </div>
  );
}
