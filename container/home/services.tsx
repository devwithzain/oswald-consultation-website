"use client";
import Link from "next/link";
import Image from "next/image";
import { arrowright } from "@/public";
import { motion } from "framer-motion";
import { servicesData } from "@/constants";

export default function Services() {
	return (
		<div className="w-full padding-x padding-y bg-white">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-[#293B48] p-10 rounded-2xl flex flex-col justify-between min-h-[350px]">
					<div className="flex flex-col gap-5">
						<Link
							href="/services"
							className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
							Services
						</Link>
						<h2 className="subHeading text-white font-bold font-advent-pro leading-tight">
							Get treatment for all your mental healthcare needs.
						</h2>
					</div>
					<div>
						<Link
							href="/services"
							className="group flex items-center gap-3 border border-white/20 w-fit px-6 py-3 rounded-full hover:bg-[#CE7E3F] transition-colors">
							<span className="paragraph text-white">See All Services</span>
							<Image
								src={arrowright}
								alt="arrow"
								className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white"
							/>
						</Link>
					</div>
				</motion.div>
				{servicesData.map((service, index) => (
					<motion.div
						key={service.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
						className="group relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-100">
						<Image
							src={service.image}
							alt={service.title}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
						<div className="absolute bottom-6 left-6 right-6">
							<div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between gap-4 shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="paragraph text-[#293B48] font-medium leading-tight line-clamp-2">
									{service.title}
								</p>
								<div className="shrink-0 w-10 h-10 rounded-full bg-[#CE7E3F] flex items-center justify-center">
									<Image
										src={arrowright}
										alt="arrow"
										className="w-5 h-5 text-white"
									/>
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
