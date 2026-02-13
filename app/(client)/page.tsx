import {
	HomeBlog,
	HomeHero,
	HomeAbout,
	HomeServices,
	HomeContactForm,
	HomeSpecialists,
	HomeWhyChooseUs,
} from "@/container";
import { CTA, Testimonials } from "@/components";

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<HomeAbout />
			<HomeServices />
			<HomeSpecialists />
			<HomeWhyChooseUs />
			<Testimonials />
			<HomeBlog />
			<CTA />
			<HomeContactForm />
		</>
	);
}
