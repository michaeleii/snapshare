// import TanStackDevTools from "@/components/tanstack-devtools";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import { Camera, Home, User2, SquarePlus } from "lucide-react";

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
  // {
  //   to: "/search",
  //   label: "Search",
  //   icon: {
  //     mobile: <Search className="h-6 w-6" />,
  //     desktop: <Search className="h-6 w-6" />,
  //   },
  // },
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
    <div className="grid max-h-dvh w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-dvh max-h-dvh flex-col gap-2">
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
          <div className="mt-auto border-t p-4">
            <Link to="/profile">
              <article className="flex items-center gap-2 p-4">
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h1 className="text-lg font-bold">John Doe</h1>
              </article>
            </Link>
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
      {/* <TanStackDevTools /> */}
    </div>
  );
}
