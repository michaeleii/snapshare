import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { routeTree } from "./routeTree.gen";
import "./index.css";

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <KindeProvider
        audience={import.meta.env.VITE_KINDE_AUDIENCE}
        clientId="aab01c739c62437992236e97be0e169f"
        domain="https://snapshare.kinde.com"
        redirectUri={window.location.origin}
        logoutUri={window.location.origin}
        onRedirectCallback={async (user) => {
          const newUser = {
            kindeId: user.id,
            avatar:
              user.picture ??
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            email: user.email,
            firstName: user.given_name,
            lastName: user.family_name,
          };

          await fetch(`${import.meta.env.VITE_POST_API_URL}/auth`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          });
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </KindeProvider>
    </StrictMode>,
  );
}
