import TanStackDevTools from "@/components/tanstack-devtools";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import { Bell, Camera, Home, Search, SquarePlus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createRootRoute({
  component: RootLayout,
});

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
    to: "/search",
    label: "Search",
    icon: {
      mobile: <Search className="h-6 w-6" />,
      desktop: <Search className="h-6 w-6" />,
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
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full min-h-screen flex-col gap-2">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <Camera className="h-8 w-8" />
              <span>Snapshare</span>
            </Link>
            {/* <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
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
        </div>
      </div>
      <div className="flex flex-col">
        <header className="absolute bottom-0 flex h-14 w-full items-center justify-around gap-4 border-b border-t bg-muted/40 px-4 md:hidden">
          {NavLinks.map((link) => (
            <Link
              to={link.to}
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary data-[status=active]:text-primary"
            >
              {link.icon.mobile}
            </Link>
          ))}
        </header>
        <Outlet />
      </div>
      <TanStackDevTools />
    </div>
  );
}
