"use client";
import { Badge } from "@/components/ui/badge";
import { Field } from "@/components/ui/field";
import { authClient } from "@/lib/auth-client";
import { BetterAuthActionButton } from "@/components/auth/better-auth-action-button";

export function Socials() {
	const lastMethod = authClient.getLastUsedLoginMethod();
	return (
		<Field className="grid grid-cols-3 gap-4">
			<BetterAuthActionButton
				action={() => authClient.signIn.social({ provider: "apple" })}
				variant="outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24">
					<path
						d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
						fill="currentColor"
					/>
				</svg>
				{lastMethod === "apple" && (
					<Badge className="absolute -top-4 -translate-x-1/2 left-1/2 text-[9px]">
						Last used
					</Badge>
				)}
				<span className="sr-only">Login with Apple</span>
			</BetterAuthActionButton>
			<BetterAuthActionButton
				action={() => authClient.signIn.social({ provider: "google" })}
				variant="outline"
				className="relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-5 h-5">
					<path
						d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
						fill="currentColor"
					/>
				</svg>
				{lastMethod === "google" && (
					<Badge className="absolute -top-4 -translate-x-1/2 left-1/2 text-[9px]">
						Last used
					</Badge>
				)}
			</BetterAuthActionButton>
			<BetterAuthActionButton
				action={() => authClient.signIn.social({ provider: "github" })}
				variant="outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-github-icon lucide-github">
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
				{lastMethod === "github" && (
					<Badge className="absolute -top-4 -translate-x-1/2 left-1/2 text-[9px]">
						Last used
					</Badge>
				)}
			</BetterAuthActionButton>
		</Field>
	);
}
