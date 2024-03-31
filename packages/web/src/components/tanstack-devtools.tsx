import { Suspense, lazy } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export default function TanStackDevTools() {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={null}>
        <TanStackRouterDevtools position="top-right" />
      </Suspense>
    </>
  );
}
