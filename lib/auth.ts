import {
	emailOTP,
	magicLink,
	twoFactor,
	lastLoginMethod,
	createAuthMiddleware,
} from "better-auth/plugins";
import {
	sendWelcomeEmail,
	sendMagicLinkEmail,
	sendSignInOTPEmail,
	sendPasswordResetEmail,
	sendEmailVerificationEmail,
	sendDeleteAccountVerificationEmail,
} from "@/lib/emails/email-verification";
import { db } from "@/drizzle/db";
import { betterAuth } from "better-auth";
import { oneTap } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { ac, admin, user } from "@/components/auth/permissions";
import { admin as adminPlugin } from "better-auth/plugins/admin";

export const auth = betterAuth({
	appName: "Better Auth",
	database: drizzleAdapter(db, {
		provider: "mysql",
	}),
	user: {
		deleteUser: {
			enabled: true,
			sendDeleteAccountVerification: async ({ user, url }) => {
				await sendDeleteAccountVerificationEmail({ user, url });
			},
		},
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		sendResetPassword: async ({ user, token }) => {
			await sendPasswordResetEmail({ user, token });
		},
	},
	socialProviders: {
		google: {
			enabled: true,
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		},
		github: {
			enabled: true,
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		},
	},
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 60 * 5,
		},
	},
	plugins: [
		oneTap(),
		twoFactor(),
		nextCookies(),
		emailOTP({
			overrideDefaultEmailVerification: true,
			async sendVerificationOTP({ email, otp, type }) {
				const user = { email, name: email.split("@")[0] };
				if (type === "email-verification") {
					await sendEmailVerificationEmail({ user, token: otp });
				} else if (type === "forget-password") {
					await sendPasswordResetEmail({ user, token: otp });
				} else if (type === "sign-in") {
					await sendSignInOTPEmail({ user, token: otp });
				}
			},
			otpLength: 6,
			expiresIn: 600,
		}),
		lastLoginMethod({
			storeInDatabase: true,
		}),
		magicLink({
			sendMagicLink: async ({ email, url }) => {
				await sendMagicLinkEmail({
					user: { email, name: email.split("@")[0] },
					url,
				});
			},
		}),
		adminPlugin({
			ac,
			roles: {
				admin,
				user,
			},
		}),
	],
	hooks: {
		after: createAuthMiddleware(async (ctx) => {
			if (ctx.path.startsWith("/sign-up")) {
				const user = ctx.context.newSession?.user ?? {
					name: ctx.body.name,
					email: ctx.body.email,
				};
				if (user != null) {
					await sendWelcomeEmail(user);
				}
			}
		}),
	},
});
