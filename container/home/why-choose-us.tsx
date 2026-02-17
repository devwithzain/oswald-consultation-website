"use client";
import Image from "next/image";
import { arrowright, choseusimg } from "@/public";
import { motion } from "framer-motion";
import { reasonsData } from "@/constants";
import Link from "next/link";

export default function WhyChooseUs() {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col lg:flex-row items-center gap-10">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 flex flex-col gap-8 order-2 lg:order-1 padding-x padding-y">
					<div className="flex flex-col gap-4">
						<p className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
							Focusing on you
						</p>
						<h2 className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight">
							Why Choose Us
						</h2>
						<p className="paragraph text-gray-600">
							At O.R.E.A, we prioritize your wellbeing with professional care,
							multilingual support, and a commitment to your long-term recovery.
						</p>
					</div>

					<div className="flex flex-col gap-8">
						{reasonsData.map((reason, index) => (
							<motion.div
								key={reason.id}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								className="flex items-start gap-6 group">
								<Image
									src={reason.icon}
									alt={reason.title}
									width={50}
									height={50}
								/>
								<div className="flex flex-col">
									<h3 className="subHeading font-bold text-[#293B48] font-dm-serif-text group-hover:text-[#CE7E3F] transition-colors">
										{reason.title}
									</h3>
									<p className="paragraph text-gray-500 leading-relaxed">
										{reason.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
					<div>
						<Link
							href="/services"
							className="bg-[#CE7E3F] group flex items-center gap-4 w-fit px-6 py-3 rounded-md transition-colors">
							<span className="paragraph text-white leading-tight font-normal">
								Let&apos;s Consultation
							</span>
							<Image
								src={arrowright}
								alt="arrow"
								className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white"
							/>
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 order-1 lg:order-2">
					<div className="relative">
						<Image
							src={choseusimg}
							alt="Why Choose Us"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-[#293B48]/10" />
					</div>
				</motion.div>
			</div>
		</div>
	);
}
