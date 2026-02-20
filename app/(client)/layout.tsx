import { ContactForm, Footer, Navbar } from "@/components/index";

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
