"use client";

import { UserButton } from "@daveyplate/better-auth-ui";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

export function NavbarAuth() {
  return (
    <div className="flex gap-2 items-center">
      <AuthLoading>
        <Skeleton className="h-9 w-20"></Skeleton>
        <Skeleton className="h-9 w-16"></Skeleton>
      </AuthLoading>
      <Authenticated>
        <Button variant="outline" asChild>
          <Link href="/parent">Parent Dashboard</Link>
        </Button>
        <UserButton size="icon" />
      </Authenticated>
      <Unauthenticated>
        <Button variant="outline" asChild>
          <Link href="/auth/sign-in">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/sign-in">Join Now</Link>
        </Button>
      </Unauthenticated>
    </div>
  );
}
