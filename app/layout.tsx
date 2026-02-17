import "@/styles/globals.css";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Geist, DM_Serif_Text } from "next/font/google";

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
	title: "Oswald",
	description: "Oswald",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${dmSerifText.variable} antialiased font-geist-sans`}>
				<ReactLenis />
				{children}
			</body>
		</html>
	);
}
