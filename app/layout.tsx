import "@/styles/globals.css";
import ReactLenis from "lenis/react";
import type { Metadata } from "next";
import { Geist, Advent_Pro } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

const adventPro = Advent_Pro({
	variable: "--font-advent-pro",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
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
				className={`${geistSans.variable} ${adventPro.variable} antialiased font-geist-sans`}>
				<ReactLenis />
				{children}
			</body>
		</html>
	);
}
