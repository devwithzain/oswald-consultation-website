"use client";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field";
import Link from "next/link";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Socials } from "@/components/auth/socaials";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { SigninSchema, SigninSchemaType } from "@/schemas";

export function SignInForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SigninSchemaType>({
		resolver: zodResolver(SigninSchema),
		mode: "onSubmit",
	});

	const onSubmit = async (data: SigninSchemaType) => {
		await authClient.signIn.email(
			{
				...data,
			},
			{
				onError: async (error) => {
					const errorCode = error.error?.code;
					const errorMessage = error.error?.message ?? "";

					const isEmailNotVerified =
						errorCode === "EMAIL_NOT_VERIFIED" ||
						errorMessage.toLowerCase().includes("email not verified");
					if (isEmailNotVerified) {
						try {
							await authClient.emailOtp.sendVerificationOtp({
								email: data.email,
								type: "email-verification",
							});
							toast.info(
								"Your email is not verified. We've sent you a new verification code.",
							);
							router.push(
								`/verify-email?email=${encodeURIComponent(data.email)}`,
							);
						} catch (sendErr) {
							if (sendErr instanceof Error) {
								toast.error(sendErr.message);
							} else {
								toast.error(
									"Could not resend verification code. Please try again.",
								);
							}
						}
						return;
					}
					toast.error(errorMessage || "Something went wrong");
				},
				onSuccess: () => {
					toast.success("Login successful");
					router.refresh();
				},
			},
		);
	};

	return (
		<div className="space-y-4">
			<div
				className={cn("flex flex-col gap-6", className)}
				{...props}>
				<Card className="overflow-hidden p-0">
					<CardContent className="w-full">
						<form
							className="p-6 md:p-8"
							onSubmit={handleSubmit(onSubmit)}>
							<FieldGroup>
								<div className="flex flex-col items-center gap-2 text-center">
									<h1 className="text-2xl font-bold">Welcome back</h1>
									<p className="text-muted-foreground text-balance">
										Login to your Luna Inc account
									</p>
								</div>
								<Field>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<Input
										id="email"
										type="email"
										placeholder="m@example.com"
										required
										autoComplete="username webauthn"
										{...register("email")}
									/>
									{errors.email && (
										<p className="text-red-500 text-sm">
											{errors.email.message}
										</p>
									)}
								</Field>
								<Field>
									<div className="flex items-center">
										<FieldLabel htmlFor="password">Password</FieldLabel>
										<a
											href="/forgot-password"
											className="ml-auto text-sm underline-offset-2 hover:underline">
											Forgot your password?
										</a>
									</div>
									<Input
										id="password"
										type="password"
										required
										autoComplete="current-password webauthn"
										{...register("password")}
									/>
									{errors.password && (
										<p className="text-red-500 text-sm">
											{errors.password.message}
										</p>
									)}
								</Field>
								<div className="flex flex-col gap-3">
									<Field>
										<Button
											type="submit"
											disabled={isSubmitting}>
											{isSubmitting ? (
												<Loader2 className="animate-spin mx-auto" />
											) : (
												"Login"
											)}
										</Button>
									</Field>
									<Field>
										<Button
											type="button"
											variant="outline"
											asChild>
											<Link href="/magic-link-sent">
												<div className="flex items-center gap-2">
													<Mail />
													Sign In with Magic Link
												</div>
											</Link>
										</Button>
									</Field>
								</div>
								<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
									Or continue with
								</FieldSeparator>
								<div className="flex flex-col gap-3">
									<Socials />
								</div>
								<FieldDescription className="text-center">
									Don&apos;t have an account? <a href="/sign-up">Sign up</a>
								</FieldDescription>
							</FieldGroup>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
