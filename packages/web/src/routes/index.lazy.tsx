import PostCard from "@/components/post-card";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-[468px] divide-y px-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <PostCard key={i} />
      ))}
    </div>
  );
}
