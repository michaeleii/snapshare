import TanStackDevTools from "@/components/tanstack-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackDevTools />
    </>
  ),
});
