import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/profile")({
  component: () => <div>Hello /profile!</div>,
});
