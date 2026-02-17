import {
	ResourcesBlog,
	ResourcesHero,
	ResourcesServices,
	ResourcesTeam,
} from "@/container";

export default function ResourcesPage() {
	return (
		<>
			<ResourcesHero />
			<ResourcesBlog />
			<ResourcesServices />
			<ResourcesTeam />
		</>
	);
}
