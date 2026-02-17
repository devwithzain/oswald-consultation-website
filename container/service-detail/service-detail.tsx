"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/constants";

export default function ServiceDetail({ services }: { services: string }) {
	const service = servicesData.find(
		(service) => service.id === Number(services),
	);

	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex flex-col lg:flex-row items-center gap-14">
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 flex flex-col gap-2">
					<p className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
						Services
					</p>
					<h2 className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight max-w-lg">
						{service?.title}
					</h2>
					<p className="paragraph text-[#293B48] font-normal leading-normal">
						{service?.description}
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 relative">
					<div className="relative rounded-bl-2xl overflow-hidden">
						<Image
							src={service?.image || ""}
							alt="abouteapimg"
							className="w-full rounded-2xl h-[500px] object-center"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
