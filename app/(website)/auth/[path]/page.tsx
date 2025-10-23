import { CardHeader, CardTitle } from "@/components/ui/card";
import { AuthView } from "@daveyplate/better-auth-ui";
import { authViewPaths } from "@daveyplate/better-auth-ui/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.values(authViewPaths).map((path) => ({ path }));
}

export default async function AuthPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <main className="container flex grow flex-col items-center justify-center self-center p-4 md:p-6 mx-auto">
      <AuthView
        path={path}
        cardHeader={
          <>
            <CardTitle className="text-lg md:text-xl">
              Continue with your email
            </CardTitle>
          </>
        }
        className="bg-transparent sm:bg-card border-0 sm:border"
      />
    </main>
  );
}
