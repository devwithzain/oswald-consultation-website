import {
	oneTapClient,
	emailOTPClient,
	twoFactorClient,
	magicLinkClient,
	lastLoginMethodClient,
	adminClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { ac, admin, user } from "@/components/auth/permissions";

export const authClient = createAuthClient({
	plugins: [
		emailOTPClient(),
		magicLinkClient(),
		lastLoginMethodClient(),
		twoFactorClient({
			onTwoFactorRedirect: () => {
				window.location.href = "/2fa";
			},
		}),
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
			autoSelect: false,
			cancelOnTapOutside: true,
			context: "signin",
		}),
		adminClient({
			ac,
			roles: {
				admin,
				user,
			},
		}),
	],
});
