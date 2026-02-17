import LegalContent from "./content";

export default function TermsOfUse() {
	return (
		<LegalContent>
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					1. Acceptance of Terms
				</h2>
				<p className="paragraph leading-relaxed">
					By accessing and using the O.R.E.A., LLC website, you agree to be
					bound by these Terms of Use. If you do not agree to these terms,
					please do not use our services.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					2. Use of Services
				</h2>
				<p className="paragraph leading-relaxed">
					Our services are provided for informational and educational purposes
					related to substance abuse counseling and rehabilitation. You agree to
					use the site only for lawful purposes and in a way that does not
					infringe the rights of, restrict, or inhibit anyone else&apos;s use
					and enjoyment of the site.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					3. Intellectual Property
				</h2>
				<p className="paragraph leading-relaxed">
					All content, trademarks, and data on this website, including software,
					databases, text, graphics, icons, and hyperlinks, are the property of
					or licensed to O.R.E.A., LLC and are protected from infringement by
					local and international legislation and treaties.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					4. Limitation of Liability
				</h2>
				<p className="paragraph leading-relaxed">
					O.R.E.A., LLC shall not be liable for any direct, indirect,
					incidental, special, or consequential damages arising out of or in any
					way connected with the use of this website or the inability to use the
					website.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					5. Changes to Terms
				</h2>
				<p className="paragraph leading-relaxed">
					We reserve the right to modify these terms at any time. Your continued
					use of the site after any changes indicates your acceptance of the new
					Terms of Use.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<p className="paragraph leading-relaxed paragraph text-gray-500 mt-8">
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</section>
		</LegalContent>
	);
}
