import { ContactForm, Footer, Navbar } from "@/components";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<ContactForm />
			<Footer />
		</>
	);
}
