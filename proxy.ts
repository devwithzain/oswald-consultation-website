import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	const pathname = request.nextUrl.pathname;

	const isSignInPage = pathname === "/sign-in";
	const isSignUpPage = pathname === "/sign-up";

	const adminDashboardPath = "/admin/dashboard";

	if (session) {
		const isAdmin = session.user.role === "admin";

		// 🔹 Logged-in user hitting auth pages
		if (isSignInPage || isSignUpPage) {
			if (isAdmin) {
				return NextResponse.redirect(new URL(adminDashboardPath, request.url));
			}

			return NextResponse.redirect(new URL("/user/dashboard", request.url));
		}

		// 🔹 User dashboard protection (USER ONLY)
		if (!isAdmin && pathname.startsWith("/user/dashboard")) {
			return NextResponse.next();
		}

		// 🔹 Admin dashboard protection
		if (isAdmin && pathname.startsWith("/user/dashboard")) {
			return NextResponse.redirect(new URL(adminDashboardPath, request.url));
		}

		return NextResponse.next();
	}

	// 🔹 Not logged in
	if (isSignInPage || isSignUpPage) {
		return NextResponse.next();
	}

	return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
	matcher: [
		"/sign-in",
		"/sign-up",
		"/user/dashboard/:path*",
		"/admin/dashboard/:path*",
	],
};
