import LegalContent from "./content";

export default function PrivacyPolicy() {
	return (
		<LegalContent>
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					1. Information Collection
				</h2>
				<p className="paragraph leading-relaxed">
					We collect information you provide directly to us, such as when you
					fill out a contact form, request information, or subscribe to our
					communications. This may include your name, email address, phone
					number, and any other information you choose to provide.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					2. Use of Information
				</h2>
				<p className="paragraph leading-relaxed">
					We use the information we collect to provide, maintain, and improve
					our services, to respond to your comments and questions, and to send
					you related information, including confirmations, technical notices,
					updates, and security alerts.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">
					3. Information Sharing
				</h2>
				<p className="paragraph leading-relaxed">
					We do not share your personal information with third parties except as
					described in this policy or as required by law. We may share
					information with vendors, consultants, and other service providers who
					need access to such information to carry out work on our behalf.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">4. Security</h2>
				<p className="paragraph leading-relaxed">
					We take reasonable measures to help protect information about you from
					loss, theft, misuse, and unauthorized access, disclosure, alteration,
					and destruction.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-advent-pro">5. Contact Us</h2>
				<p className="paragraph leading-relaxed">
					If you have any questions about this Privacy Policy, please contact
					us.
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
