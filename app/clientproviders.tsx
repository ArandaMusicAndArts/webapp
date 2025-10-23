"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { useRouter } from "next/navigation";
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ClientProviders({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <ConvexBetterAuthProvider client={convex} authClient={authClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthUIProvider
          emailOTP={true}
          passkey={true}
          social={{ providers: ["google"] }}
          credentials={false}
          multiSession={false}
          optimistic={true}
          authClient={authClient}
          navigate={router.push}
          replace={router.replace}
          deleteUser
          onSessionChange={() => {
            // Clear router cache (protected routes)
            router.refresh();
          }}
          Link={Link}
        >
          {children}
        </AuthUIProvider>
      </ThemeProvider>
    </ConvexBetterAuthProvider>
  );
}
