"use client";
import Image from "next/image";
import { star } from "@/public";
import { motion } from "framer-motion";
import { teamData } from "@/constants";

export default function Team() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex flex-col items-center justify-center gap-10">
				<h2 className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight">
					Meet The Team
				</h2>
				<div className="w-[80%] flex flex-col items-center gap-10">
					{teamData.map((item) => (
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="w-full flex items-center gap-14 bg-white shadow-md p-10 rounded-2xl"
							key={item.id}>
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className="w-full lg:w-1/2 relative">
								<Image
									src={item.image}
									alt={item.title}
									className="w-full object-cover"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
								className="w-full flex flex-col gap-5">
								<div className="flex flex-col gap-1">
									<h2 className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight">
										{item.title}
									</h2>
									<p className="paragraph text-[#CE7E3F] font-semibold leading-normal">
										{item.role}
									</p>
									<div className="flex items-center gap-5">
										<p className="paragraph text-[#293B48] font-normal leading-normal">
											{item.exp}
										</p>
										<div className="flex items-center gap-1">
											{Array.from({ length: item.rating }).map((_, index) => (
												<Image
													key={index}
													src={star}
													alt={item.title}
													width={20}
													height={20}
													className="w-5 object-contain"
												/>
											))}
										</div>
									</div>
								</div>
								<p className="paragraph text-[#293B48] font-normal leading-normal">
									{item.desc}
								</p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
