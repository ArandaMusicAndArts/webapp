// app/auth/verify-otp/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; // Your auth client instance
import { Spinner } from "@/components/ui/spinner";

export default function VerifyOTPPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSignIn = async (email: string, otp: string) => {
      setLoading(true);
      setError(null);

      try {
        const { error } = await authClient.signIn.emailOtp({
          email: email,
          otp: otp,
        });

        if (error) {
          setError("Invalid OTP or email");
        } else {
          // Redirect to dashboard after successful sign-in
          router.push("/");
        }
      } catch {
        setError("Authentication failed");
      } finally {
        setLoading(false);
      }
    };

    const email = searchParams.get("email");
    const otp = searchParams.get("otp");

    if (email && otp) {
      handleSignIn(email, otp);
    } else {
      setError("Email and OTP are required");
    }
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center p-10 gap-2">
        <Spinner />
        Signing you in...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center p-10 gap-2">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center p-10 gap-2">
      <Spinner />
      Processing authentication...
    </div>
  );
}
