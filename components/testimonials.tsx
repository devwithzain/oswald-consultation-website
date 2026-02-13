"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialsData } from "@/constants";
import { cotation, triangledown } from "@/public";

export default function Testimonials() {
	return (
		<div className="w-full padding-x padding-y bg-[#293B48]">
			<div className="w-full flex justify-between gap-10">
				<div className="flex flex-col gap-4 max-w-xl w-1/2">
					<div className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
						Testimonials
					</div>
					<h2 className="heading text-white font-bold font-advent-pro leading-tight">
						What They&apos;re <br /> Talking About Company?
					</h2>
					<p className="paragraph text-white font-normal leading-normal">
						Real stories from real people who have experienced our care and
						support. And we are proud of it.
					</p>
				</div>
				<div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
					{testimonialsData.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="flex flex-col gap-10">
							<div className="flex flex-col gap-5 bg-white p-10 rounded-2xl relative">
								<Image
									src={cotation}
									alt="cotation"
									width={50}
									height={50}
								/>
								<p className="paragraph text-gray-600 italic leading-loose text-lg relative z-10">
									&quot;{testimonial.text}&quot;
								</p>
								<Image
									src={triangledown}
									alt="triangledown"
									width={50}
									height={50}
									className="absolute -bottom-4 left-1/4 -translate-x-1/2"
								/>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#CE7E3F]/20">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										width={64}
										height={64}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="flex flex-col">
									<h4 className="text-xl font-bold text-white font-advent-pro">
										{testimonial.name}
									</h4>
									<p className="paragraph text-[#CE7E3F] text-sm">
										{testimonial.role}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
