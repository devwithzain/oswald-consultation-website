"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { reasonsAboutData } from "@/constants";
import { arrowright, aboutchoseusimg } from "@/public";

export default function WhyChooseUs() {
	return (
		<div className="w-full bg-[#293B48]">
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
						<h2 className="heading text-white font-bold font-advent-pro leading-tight">
							Why Choose Us
						</h2>
						<p className="paragraph text-white font-normal leading-normal">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using &apos;Content here,
							content here&apos;, making it look like readable English.
						</p>
						<p className="paragraph text-white font-normal leading-normal">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using &apos;Content here,
							content here&apos;, making it look like readable English.
						</p>
					</div>
					<div className="flex flex-col gap-8">
						{reasonsAboutData.map((reason, index) => (
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
									<h3 className="subHeading font-bold text-white font-advent-pro group-hover:text-[#CE7E3F] transition-colors">
										{reason.title}
									</h3>
									<p className="paragraph text-white leading-relaxed font-normal">
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
							src={aboutchoseusimg}
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
