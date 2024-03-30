import { Post } from "@core/db/queries/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article>
      <div className="mb-2 mt-6 flex items-start gap-2">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          className="h-6 w-6 rounded-full object-cover"
        />
        <span className="text-sm font-bold">John Doe</span>
      </div>
      <img
        className="aspect-[4/5] w-full max-w-[468px] rounded-md border border-black/20"
        src="https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="px-2 pb-6 pt-4">
        <div className="flex items-end gap-2">
          <span className="text-sm font-bold">John Doe</span>
          <span className="text-sm">{post.content}</span>
        </div>
      </div>
    </article>
  );
}
