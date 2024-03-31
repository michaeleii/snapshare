import { Button } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/profile")({
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
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
