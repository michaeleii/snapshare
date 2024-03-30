import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$id")({
  // loader: async ({ params: { id } }) => {},
  component: SinglePost,
});

function SinglePost() {
  // const post = Route.useLoaderData();
}
