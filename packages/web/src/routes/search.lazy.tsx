import PostCard from "@/components/post-card";
import { Input } from "@/components/ui/input";
import { createLazyFileRoute } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";

export const Route = createLazyFileRoute("/search")({
  component: Search,
});

function Search() {
  return (
    <div className="px-2 pt-4">
      <div className="w-full">
        <form>
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="w-full appearance-none bg-background pl-8 shadow-none"
            />
          </div>
        </form>
      </div>
      <div className="p-6">
        <PostCard />
      </div>
    </div>
  );
}
