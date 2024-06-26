import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Profile,
});

export default function Profile() {
  const { user, logout } = useKindeAuth();
  return (
    <div className="mx-auto max-w-[468px] px-2 pt-10">
      <h1 className="mb-4 text-2xl font-bold">
        Hi {user?.given_name} {user?.family_name}
      </h1>
      <p className="mb-4 text-gray-500">{user?.email}</p>
      <div className="mb-4 flex items-center gap-2">
        <span>Theme:</span>
        <ModeToggle />
      </div>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
