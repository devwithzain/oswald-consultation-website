import LegalContent from "./content";

export default function CookiePolicy() {
	return (
		<LegalContent>
			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-dm-serif-text">
					1. What Are Cookies
				</h2>
				<p className="paragraph leading-relaxed">
					Cookies are small text files that are placed on your computer or
					mobile device when you visit a website. They are widely used to make
					websites work more efficiently and to provide information to the
					owners of the site.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-dm-serif-text">
					2. How We Use Cookies
				</h2>
				<p className="paragraph leading-relaxed">
					We use cookies to understand how you use our website and to improve
					your experience. This includes remembering your preferences and
					settings, and analyzing site traffic and trends.
				</p>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-dm-serif-text">
					3. Types of Cookies We Use
				</h2>
				<ul className="list-disc pl-6 paragraph leading-relaxed space-y-2">
					<li>
						<strong>Essential Cookies:</strong> Necessary for the website to
						function properly.
					</li>
					<li>
						<strong>Analytics Cookies:</strong> Help us understand how visitors
						interact with the website.
					</li>
					<li>
						<strong>Functional Cookies:</strong> Allow the website to remember
						choices you make.
					</li>
				</ul>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold font-dm-serif-text">
					4. Managing Cookies
				</h2>
				<p className="paragraph leading-relaxed">
					Most web browsers allow you to control cookies through their settings
					preferences. However, if you limit the ability of websites to set
					cookies, you may worsen your overall user experience.
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
