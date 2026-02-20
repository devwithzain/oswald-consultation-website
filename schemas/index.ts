import * as z from "zod";

export const UserSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	email: z.string(),
	role: z.string().optional(),
	createdAt: z.date().or(z.string()),
	emailVerified: z.boolean(),
	banned: z.boolean(),
	image: z.string().nullable().optional(),
});

export const SigninSchema = z.object({
	email: z.email({
		message: "A valid email is required.",
	}),
	password: z.string().min(1, {
		message: "Password is required.",
	}),
});

export const SignupSchema = z
	.object({
		name: z.string().min(1, {
			message: "Name is required.",
		}),
		email: z.email({
			message: "A valid email is required.",
		}),
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" })
			.regex(/[A-Z]/, {
				message: "Password must contain at least one uppercase letter",
			})
			.regex(/[a-z]/, {
				message: "Password must contain at least one lowercase letter",
			})
			.regex(/[0-9]/, { message: "Password must contain at least one number" })
			.regex(/[^A-Za-z0-9]/, {
				message: "Password must contain at least one symbol",
			}),
		confirmPassword: z.string().min(8, "Confirm password must match"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});

export const OTPSchema = z.object({
	email: z.email({
		message: "A valid email is required.",
	}),
	otp: z.string().min(6, {
		message: "OTP is required.",
	}),
});

export const ForgotPasswordSchema = z.object({
	email: z.email({
		message: "A valid email is required.",
	}),
});

export const ResetPasswordSchema = z.object({
	otp: z.string().min(6, {
		message: "OTP is required.",
	}),
});

export const VerifyOtpSchema = z
	.object({
		password: z
			.string()
			.min(8, { message: "Password must be at least 8 characters" })
			.regex(/[A-Z]/, {
				message: "Password must contain at least one uppercase letter",
			})
			.regex(/[a-z]/, {
				message: "Password must contain at least one lowercase letter",
			})
			.regex(/[0-9]/, { message: "Password must contain at least one number" })
			.regex(/[^A-Za-z0-9]/, {
				message: "Password must contain at least one symbol",
			}),
		confirmPassword: z.string().min(8, "Confirm password must match"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must match",
		path: ["confirmPassword"],
	});

export const TwoFactorAuthSchema = z.object({
	password: z.string().min(1),
});

export const QrSchema = z.object({
	token: z.string().length(6),
});

export const ProfileUpdateSchema = z.object({
	name: z.string().optional(),
	email: z.email().optional(),
	image: z.string().optional(),
});

export const PasskeySchema = z.object({
	name: z.string().min(1),
});

export const ChangePasswordSchema = z.object({
	currentPassword: z.string().min(1),
	newPassword: z.string().min(6),
	revokeOtherSessions: z.boolean(),
});

export const TotpSchema = z.object({
	code: z.string().length(6),
});

export const BackupCodeSchema = z.object({
	code: z.string().min(1),
});

export const MagicLinkSchema = z.object({
	email: z.email(),
});

export const CreateOrganizationSchema = z.object({
	name: z.string().min(2, {
		message: "Organization name must be at least 2 characters.",
	}),
});

export const CreateInviteSchema = z.object({
	email: z.email().min(1).trim(),
	role: z.enum(["member", "admin"]),
});

export type User = z.infer<typeof UserSchema>;
export type QrForm = z.infer<typeof QrSchema>;
export type TotpForm = z.infer<typeof TotpSchema>;
export type OTPSchemaType = z.infer<typeof OTPSchema>;
export type PasskeyForm = z.infer<typeof PasskeySchema>;
export type SigninSchemaType = z.infer<typeof SigninSchema>;
export type SignupSchemaType = z.infer<typeof SignupSchema>;
export type BackupCodeForm = z.infer<typeof BackupCodeSchema>;
export type MagicLinkFormType = z.infer<typeof MagicLinkSchema>;
export type CreateInviteForm = z.infer<typeof CreateInviteSchema>;
export type VerifyOtpSchemaType = z.infer<typeof VerifyOtpSchema>;
export type ProfileUpdateForm = z.infer<typeof ProfileUpdateSchema>;
export type TwoFactorAuthForm = z.infer<typeof TwoFactorAuthSchema>;
export type ChangePasswordForm = z.infer<typeof ChangePasswordSchema>;
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
export type CreateOrganizationForm = z.infer<typeof CreateOrganizationSchema>;
export type CreateOrganizationFormType = z.infer<
	typeof CreateOrganizationSchema
>;
