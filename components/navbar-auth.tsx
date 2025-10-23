"use client";

import { AuthLoading, UserButton } from "@daveyplate/better-auth-ui";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

export function NavbarAuth() {
  return (
    <div className="flex gap-2">
      <AuthLoading>
        <Skeleton className="h-9 w-20"></Skeleton>
        <Skeleton className="h-9 w-16"></Skeleton>
      </AuthLoading>
      <Authenticated>
        <UserButton size="icon" />
      </Authenticated>
      <Unauthenticated>
        <Button variant="outline" asChild>
          <Link href="/auth/sign-in">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/sign-in">Enrol</Link>
        </Button>
      </Unauthenticated>
    </div>
  );
}
