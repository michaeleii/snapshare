import { Outlet, createFileRoute } from "@tanstack/react-router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const Route = createFileRoute("/_authenticated")({
  component: Component,
});

function Component() {
  const { isAuthenticated, isLoading } = useKindeAuth();
  return isLoading ? null : isAuthenticated ? <Outlet /> : <Login />;
}

function Login() {
  return (
    <div className="flex h-dvh max-h-dvh items-center justify-center">
      <LoginForm />
    </div>
  );
}
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginForm() {
  const { login, register } = useKindeAuth();
  return (
    <Card className="w-full max-w-sm border-0 shadow-none md:border md:shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Welcome to Snapshare
        </CardTitle>
        <CardDescription className="text-center">
          Please login to continue.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button onClick={() => login()}>Login</Button>
        <Button onClick={() => register()}>Register</Button>
      </CardContent>
    </Card>
  );
}
