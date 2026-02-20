import "@/styles/globals.css";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, DM_Serif_Text } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSerifText = DM_Serif_Text({
	variable: "--font-dm-serif-text",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Oswald Consultation Website",
	description: "Oswald Consultation Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${dmSerifText.variable} antialiased font-geist-sans`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
					<Toaster />
					<ReactLenis />
				</ThemeProvider>
			</body>
		</html>
	);
}
