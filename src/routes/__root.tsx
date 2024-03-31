import TanStackDevTools from "@/components/tanstack-devtools";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";

import { Camera, Home, User2, SquarePlus } from "lucide-react";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootLayout,
  },
);

interface NavLink {
  to: string;
  label: string;
  icon: {
    mobile: React.ReactNode;
    desktop: React.ReactNode;
  };
}

const NavLinks: NavLink[] = [
  {
    to: "/",
    label: "Home",
    icon: {
      mobile: <Home className="h-6 w-6" />,
      desktop: <Home className="h-6 w-6" />,
    },
  },
  {
    to: "/create",
    label: "Create",
    icon: {
      mobile: <SquarePlus className="h-6 w-6" />,
      desktop: <SquarePlus className="h-6 w-6" />,
    },
  },
];

function RootLayout() {
  const { isLoading, user, login, register } = useKindeAuth();
  return (
    <div className="grid max-h-dvh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-dvh max-h-dvh flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Camera className="h-8 w-8" />
              <span>Snapshare</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-lg text-muted-foreground transition-all hover:text-primary data-[status=active]:bg-muted data-[status=active]:text-primary"
                >
                  {link.icon.desktop}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto border-t p-4">
            {isLoading ? (
              <Skeleton className="flex items-center gap-2 p-4">
                <Skeleton className="h-10 w-10 rounded-full object-cover" />
                <Skeleton className="w-6 text-lg font-bold"></Skeleton>
              </Skeleton>
            ) : user ? (
              <Link to="/profile">
                <article className="flex items-center gap-2 p-4">
                  <img
                    src={
                      user.picture ||
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-lg font-bold">{user.given_name}</span>
                </article>
              </Link>
            ) : (
              <div className="flex flex-col justify-center gap-2">
                <Button onClick={() => login()}>Login</Button>
                <Button onClick={() => register()}>Register</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="absolute bottom-0 flex h-14 w-full items-center justify-around gap-4 border-t bg-muted px-4 md:hidden">
          {NavLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary data-[status=active]:text-primary"
            >
              {link.icon.mobile}
            </Link>
          ))}
          <Link
            to="/profile"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary data-[status=active]:text-primary"
          >
            <User2 className="h-6 w-6" />
          </Link>
        </header>
        <main className="main overflow-y-auto md:h-dvh md:max-h-dvh">
          <Outlet />
        </main>
      </div>
      <TanStackDevTools />
    </div>
  );
}
