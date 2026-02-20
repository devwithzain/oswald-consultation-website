"use client";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { ChangePasswordForm, ChangePasswordSchema } from "@/schemas";

export function ChangePasswordForm() {
	const form = useForm<ChangePasswordForm>({
		resolver: zodResolver(ChangePasswordSchema),
		defaultValues: {
			currentPassword: "",
			newPassword: "",
			revokeOtherSessions: true,
		},
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = form;

	async function handlePasswordChange(data: ChangePasswordForm) {
		await authClient.changePassword(data, {
			onError: (error) => {
				toast.error(error.error.message || "Failed to change password");
			},
			onSuccess: () => {
				toast.success("Password changed successfully");
				reset();
			},
		});
	}

	return (
		<Form {...form}>
			<form
				className="space-y-4"
				onSubmit={handleSubmit(handlePasswordChange)}>
				<FormField
					control={form.control}
					name="currentPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Current Password</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="newPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>New Password</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="revokeOtherSessions"
					render={({ field }) => (
						<FormItem className="flex">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel>Log out other sessions</FormLabel>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full">
					<LoadingSwap isLoading={isSubmitting}>Change Password</LoadingSwap>
				</Button>
			</form>
		</Form>
	);
}
