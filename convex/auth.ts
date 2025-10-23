import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth } from "better-auth";
import { passkey } from "better-auth/plugins/passkey";
import { emailOTP } from "better-auth/plugins";

const siteUrl = process.env.SITE_URL!;

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (
  ctx: GenericCtx<DataModel>,
  { optionsOnly } = { optionsOnly: false },
) => {
  return betterAuth({
    // disable logging when createAuth is called just to generate options.
    // this is not required, but there's a lot of noise in logs without it.
    logger: {
      disabled: optionsOnly,
    },
    trustedOrigins: ["*"], //TODO: REMOVE IN PROD
    baseURL: siteUrl,
    database: authComponent.adapter(ctx),
    // Configure simple, non-verified email/password to get started
    emailAndPassword: {
      enabled: false,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
    },
    plugins: [
      // The Convex plugin is required for Convex compatibility
      convex(),
      passkey(),
      emailOTP({
        async sendVerificationOTP({ email, otp, type }) {
          console.log(`Sending OTP ${otp} to ${email}`);
          console.log(
            `${siteUrl}/api/auth/verify-otp?email=${email}&otp=${otp}`,
          );
          if (type === "sign-in") {
            // console.log(`Sending OTP ${otp} to ${email}`);
          } else if (type === "email-verification") {
            // console.log(`Sending OTP ${otp} to ${email}`);
          } else {
            // console.log(`Sending OTP ${otp} to ${email}`);
          }
        },
      }),
    ],
    account: {
      accountLinking: {
        allowDifferentEmails: true,
      },
    },
    user: {
      deleteUser: {
        enabled: true,
      },
    },
  });
};

// Example function for getting the current user
// Feel free to edit, omit, etc.
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return authComponent.getAuthUser(ctx);
  },
});
