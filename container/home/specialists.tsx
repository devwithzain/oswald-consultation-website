"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { specialistsData } from "@/constants";

export default function Specialists() {
	return (
		<div className="w-full padding-x padding-y bg-[#293B48]">
			<div className="w-full flex flex-col gap-12">
				{/* Header */}
				<div className="w-full flex justify-between gap-5 items-end">
					<div className="max-w-4xl flex flex-col gap-2">
						<p className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
							Online Appointments
						</p>
						<h2 className="heading text-white font-bold font-advent-pro leading-tight">
							Let&apos;s Meet With Our
							<br /> Professional Specialists Profiles
						</h2>
						<p className="paragraph text-white/70">
							OREA offers confidential, short-term counseling, assessments, and
							follow-up services to employees for personal and work-related
							issues that affect their well-being and job performance.
						</p>
					</div>
					<motion.button
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="w-fit h-fit px-10 py-3 rounded-md bg-[#CE7E3F] paragraph text-white leading-tight font-normal tracking-tight hover:bg-[#b86d34] transition-colors">
						Meet All Councilor
					</motion.button>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{specialistsData.map((specialist, index) => (
						<motion.div
							key={specialist.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group relative rounded-2xl overflow-hidden bg-white/5 aspect-square">
							<Image
								src={specialist.image}
								alt={specialist.name}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
								width={800}
								height={400}
							/>
							<div className="absolute inset-0 bg-linear-to-t from-[#293B48]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
							<div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-2xl font-bold text-white font-advent-pro mb-1">
									{specialist.name}
								</p>
								<p className="paragraph text-[#CE7E3F] font-medium">
									{specialist.role}
								</p>
								<div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
									<p className="paragraph text-white/60 paragraph">
										View Profile
									</p>
									<span className="text-white">→</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
