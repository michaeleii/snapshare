import { Post } from "@core/db/queries/posts";

export const fetchPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  const posts: Post[] = await res.json();
  return posts;
};

export const fetchPost = async (id: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`);
  const post: Post = await res.json();
  return post;
};
