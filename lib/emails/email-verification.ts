import { Resend } from "resend";
import { TmailData, TmailTokenData } from "@/types";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailVerificationEmail({
	user,
	token,
}: TmailTokenData) {
	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: user.email,
			subject: "Verify your email address",
			html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Verify Your Email</h2>
        <p>Hello ${user.name},</p>
        <p>Thank you for signing up! Your 6 digit verification code is below:</p>
        <button style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">${token}</button>
        <p>If you didn't create an account, please ignore this email.</p>
        <p>This code will expire in 24 hours.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
			text: `Hello ${user.name},\n\nThank you for signing up! Your 6 digit verification code is below: ${token}\n\nIf you didn't create an account, please ignore this email.\n\nThis code will expire in 24 hours.\n\nBest regards,\nYour App Team`,
		});
	} catch (error) {
		throw error;
	}
}

export function sendPasswordResetEmail({ user, token }: TmailTokenData) {
	return resend.emails.send({
		from: "onboarding@resend.dev",
		to: user.email,
		subject: "Reset your password",
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Reset Your Password</h2>
        <p>Hello ${user.name},</p>
        <p>You requested to reset your password. Your 6 digit verification code is below:</p>
        <div style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0; font-size: 24px; font-weight: bold; letter-spacing: 4px;">${token}</div>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This code will expire in 24 hours.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
		text: `Hello ${user.name},\n\nYou requested to reset your password. Your 6 digit verification code is below: ${token}\n\nIf you didn't request this, please ignore this email.\n\nThis code will expire in 24 hours.\n\nBest regards,\nYour App Team`,
	});
}

export async function sendDeleteAccountVerificationEmail({
	user,
	url,
}: TmailData) {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: user.email,
		subject: "Delete your account",
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Confirm Account Deletion</h2>
        <p>Hello ${user.name},</p>
        <p>We're sorry to see you go! Please confirm your account deletion by clicking the button below:</p>
        <a href="${url}" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Confirm Deletion</a>
        <p>If you don't have an account, please ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
		text: `Hello ${user.name},\n\nWe're sorry to see you go! Please confirm your account deletion by clicking this link: ${url}\n\nIf you don't have an account, please ignore this email.\n\nThis link will expire in 24 hours.\n\nBest regards,\nYour App Team`,
	});
}

export async function sendWelcomeEmail(user: { name: string; email: string }) {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: user.email,
		subject: "Welcome to Our App!",
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Welcome to Our App!</h2>
        <p>Hello ${user.name},</p>
        <p>Thank you for signing up for our app! We're excited to have you on board.</p>
        <p>Best regards,
        <br>
        Your App Team</p>
      </div>
    `,
		text: `Hello ${user.name},\n\nThank you for signing up for our app! We're excited to have you on board.\n\nBest regards,\nYour App Team`,
	});
}

export function sendEmail({
	to,
	subject,
	html,
	text,
}: {
	to: string;
	subject: string;
	html: string;
	text: string;
}) {
	return resend.emails.send({
		from: "onboarding@resend.dev",
		to,
		subject,
		html,
		text,
	});
}

export async function sendOrganizationInviteEmail({
	invitation,
	inviter,
	organization,
	email,
}: {
	invitation: { id: string };
	inviter: { name: string };
	organization: { name: string };
	email: string;
}) {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: `You're invited to join the ${organization.name} organization`,
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">You're invited to join ${organization.name}</h2>
        <p>Hello ${inviter.name},</p>
        <p>${inviter.name} invited you to join the ${organization.name} organization. Please click the button below to accept/reject the invitation:</p>
        <a href="${process.env.BETTER_AUTH_URL}/organizations/invites/${invitation.id}" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Manage Invitation</a>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
		text: `You're invited to join the ${organization.name} organization\n\nHello ${inviter.name},\n\n${inviter.name} invited you to join the ${organization.name} organization. Please click the link below to accept/reject the invitation:\n\n${process.env.BETTER_AUTH_URL}/organizations/invites/${invitation.id}\n\nBest regards,\nYour App Team`,
	});
}

export async function sendSignInOTPEmail({ user, token }: TmailTokenData) {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: user.email,
		subject: "Sign in with OTP",
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Sign in to Our App</h2>
        <p>Hello ${user.name},</p>
        <p>Your sign-in OTP is below:</p>
        <div style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0; font-size: 24px; font-weight: bold; letter-spacing: 4px;">${token}</div>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This code will expire in 5 minutes.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
		text: `Hello ${user.name},\n\nYour sign-in OTP is below: ${token}\n\nIf you didn't request this, please ignore this email.\n\nThis code will expire in 5 minutes.\n\nBest regards,\nYour App Team`,
	});
}

export async function sendMagicLinkEmail({ user, url }: TmailData) {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: user.email,
		subject: "Sign in with Magic Link",
		html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Sign in to Our App</h2>
        <p>Hello ${user.name},</p>
        <p>You can sign in to our app using the magic link below:</p>
        <a href="${url}" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Sign In</a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 24 hours.</p>
        <p>Best regards,<br>Your App Team</p>
      </div>
    `,
		text: `Hello ${user.name},\n\nYou can sign in to our app using the magic link below: ${url}\n\nIf you didn't request this, please ignore this email.\n\nThis link will expire in 24 hours.\n\nBest regards,\nYour App Team`,
	});
}
