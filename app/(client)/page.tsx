import {
	HomeBlog,
	HomeHero,
	HomeAbout,
	HomeServices,
	HomeSpecialists,
	HomeWhyChooseUs,
} from "@/container";
import { CTA, Testimonials } from "@/components/index";

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
		</>
	);
}
