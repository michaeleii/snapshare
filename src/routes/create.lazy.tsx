import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create")({
  component: Create,
});

function Create() {
  return <div className="p-2">Hello from Create!</div>;
}
