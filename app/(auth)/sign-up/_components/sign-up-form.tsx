"use client";
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/ui/field";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Socials } from "@/components/auth/socaials";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { SignupSchema, SignupSchemaType } from "@/schemas";

export function SignUpForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupSchemaType>({
		resolver: zodResolver(SignupSchema),
		mode: "onSubmit",
	});

	const onSubmit = async (data: SignupSchemaType) => {
		await authClient.signUp.email(
			{
				...data,
			},
			{
				onError: (error) => {
					toast.error(error.error.message || "Something went wrong");
				},
				onSuccess: async () => {
					toast.success("Account created successfully");
					router.push("/verify-email?email=" + encodeURIComponent(data.email));
				},
			},
		);
	};

	return (
		<div
			className={cn("w-full flex flex-col gap-4", className)}
			{...props}>
			<Card className="overflow-hidden p-0">
				<CardContent>
					<form
						className="p-6 md:p-8"
						onSubmit={handleSubmit(onSubmit)}>
						<FieldGroup>
							<div className="flex flex-col items-center gap-2 text-center">
								<h1 className="text-2xl font-bold">Create your account</h1>
								<p className="text-muted-foreground text-sm text-balance">
									Enter your email below to create your account
								</p>
							</div>
							<Field>
								<FieldLabel htmlFor="name">Name</FieldLabel>
								<Input
									id="name"
									type="text"
									placeholder="John Doe"
									required
									{...register("name")}
								/>
								{errors.name && (
									<p className="text-red-500 text-sm">{errors.name.message}</p>
								)}
							</Field>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
									{...register("email")}
								/>
								{errors.email && (
									<p className="text-red-500 text-sm">{errors.email.message}</p>
								)}
								<FieldDescription>
									We&apos;ll use this to contact you. We will not share your
									email with anyone else.
								</FieldDescription>
							</Field>
							<Field>
								<Field className="flex flex-col gap-4">
									<Field>
										<FieldLabel htmlFor="password">Password</FieldLabel>
										<Input
											id="password"
											type="password"
											required
											{...register("password")}
										/>
										{errors.password && (
											<p className="text-red-500 text-sm">
												{errors.password.message}
											</p>
										)}
									</Field>
									<Field>
										<FieldLabel htmlFor="confirm-password">
											Confirm Password
										</FieldLabel>
										<Input
											id="confirm-password"
											type="password"
											required
											{...register("confirmPassword")}
										/>
										{errors.confirmPassword && (
											<p className="text-red-500 text-sm">
												{errors.confirmPassword.message}
											</p>
										)}
									</Field>
								</Field>
							</Field>
							<Field>
								<Button
									type="submit"
									disabled={isSubmitting}>
									{isSubmitting ? (
										<Loader2 className="animate-spin mx-auto" />
									) : (
										"Create Account"
									)}
								</Button>
							</Field>
							<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
								Or continue with
							</FieldSeparator>
							<Socials />
							<FieldDescription className="text-center">
								Already have an account? <a href="/sign-in">Sign in</a>
							</FieldDescription>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
