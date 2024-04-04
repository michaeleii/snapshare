import { Post } from "@core/db/queries/posts";
import { Link } from "@tanstack/react-router";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <div className="mb-2 mt-6 flex items-start gap-2">
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
      </div>
      <Link
        to="/post/$id"
        params={{
          id: post.id.toString(),
        }}
      >
        <img
          className="aspect-[4/5] w-full max-w-[468px] rounded-md border border-black/20 bg-black object-contain"
          src={post.image}
        />
      </Link>
      <div className="px-2 pb-6 pt-4">
        <div className="flex items-end gap-2">
          <span className="text-sm">{post.caption}</span>
        </div>
      </div>
    </article>
  );
}
