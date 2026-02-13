"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { arrowright, surveyimage } from "@/public";

export default function CTA() {
	return (
		<div className="w-full bg-[#293B48]">
			<div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-1/2 padding-x padding-y flex flex-col gap-5">
					<div className="flex flex-col gap-2">
						<div className="w-fit bg-[#CE7E3F] text-white px-4 py-1 rounded-full">
							Survey Form
						</div>
						<h2 className="heading text-white font-bold font-advent-pro leading-tight">
							Feedback / Customer Service
						</h2>
						<p className="paragraph text-white font-normal leading-normal">
							Lorem Ipsum has been the industry&apos;s standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it Lorem Ipsum has been the industry&apos;s standard
							dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it
						</p>
					</div>
					<Link
						href="/contact"
						className="w-fit group inline-flex items-center gap-2 bg-[#CE7E3F] text-white px-6 py-3 rounded-md hover:bg-[#b96f34] transition-all duration-300 shadow-md">
						Contact Us
						<Image
							src={arrowright}
							alt="arrow-right"
							width={16}
							height={16}
							className="group-hover:translate-x-1 transition-transform duration-300"
						/>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-1/2">
					<div className="w-full relative">
						<Image
							src={surveyimage}
							alt="Customer Service"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/20" />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
