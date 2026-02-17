"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/constants";

export default function BlogSection() {
	return (
		<section className="w-full bg-[#293B48] padding-x padding-y">
			<div className="w-full flex flex-col gap-5">
				<div className="flex items-center justify-between flex-wrap gap-6">
					<div className="flex flex-col gap-2">
						<div className="w-fit bg-[#CE7E3F] text-white px-4 py-1 rounded-full">
							Services
						</div>
						<h2 className="heading text-white font-bold font-advent-pro leading-tight">
							Our Services
						</h2>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
					{servicesData.slice(0, 3).map((blog, index) => (
						<motion.div
							key={blog.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group">
							<div className="relative h-[260px] rounded-xl overflow-hidden shadow-sm">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-700"
								/>
							</div>
							<div className="mt-6 space-y-2">
								<h3 className="subHeading font-bold text-white leading-tight font-advent-pro group-hover:text-[#CE7E3F] transition">
									{blog.title}
								</h3>
								<p className="text-white paragraph leading-normal font-normal">
									{blog.description.slice(0, 100)}
								</p>
								<div className="inline-flex items-center gap-2 text-[#CE7E3F] font-medium cursor-pointer group-hover:gap-2 transition-all duration-300">
									Continue reading...
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
