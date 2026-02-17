import {
	ServiceDetail,
	ServiceDetailHero,
	ServiceDetailOtherServices,
} from "@/container";

export default async function ServiceDetailPage({
	params,
}: {
	params: Promise<{ services: string }>;
}) {
	const { services } = await params;
	return (
		<>
			<ServiceDetailHero />
			<ServiceDetail services={services} />
			<ServiceDetailOtherServices />
		</>
	);
}
