"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { duidwiimg01, duidwiimg02 } from "@/public";

export default function DUI() {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col gap-10">
				<div className="w-full flex flex-col lg:flex-row items-center gap-14 padding-x padding-y">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2 relative">
						<Image
							src={duidwiimg01}
							alt="duidwiimg01"
							className="w-full object-cover"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2 flex flex-col gap-5">
						<h2 className="heading text-[#293B48] font-bold font-advent-pro leading-tight">
							DUI/DWI & Substance Abuse Services
						</h2>
						<p className="paragraph text-[#293B48] font-normal leading-normal">
							Our program is designed to offer our clients the tools for living
							a fulfilling life free of addictive substances. Our outpatient
							services offer assistance with chemical abuse and dependency while
							requiring minimal interruptions of daily work and family life. Our
							objective is to combine the benefit of group treatment with
							special consideration for the need and goals of each participant
							in the collaborative development of an individualized treatment
							plan. We aim to identify the unique needs of distinct populations
							including women, minorities, the lgbtq community, and persons with
							disabilities, co-occurring disorders, and/or a history of trauma.
						</p>
						<p className="paragraph text-[#293B48] font-normal leading-normal">
							We believe that alcohol and drug addiction are diseases that our
							clients do not choose; however, their success will depend on their
							willingness to attend and participate in all education and
							treatment sessions as well as recommended self-help groups.
						</p>
					</motion.div>
				</div>
				<div className="w-full bg-[#293B48] flex flex-col lg:flex-row items-center gap-14 padding-x padding-y">
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2 flex flex-col gap-5">
						<h2 className="heading text-white font-bold font-advent-pro leading-tight">
							DUI/DWI & Substance Abuse Services
						</h2>
						<p className="paragraph text-white font-normal leading-normal">
							Our program is designed to offer our clients the tools for living
							a fulfilling life free of addictive substances. Our outpatient
							services offer assistance with chemical abuse and dependency while
							requiring minimal interruptions of daily work and family life. Our
							objective is to combine the benefit of group treatment with
							special consideration for the need and goals of each participant
							in the collaborative development of an individualized treatment
							plan. We aim to identify the unique needs of distinct populations
							including women, minorities, the lgbtq community, and persons with
							disabilities, co-occurring disorders, and/or a history of trauma.
						</p>
						<p className="paragraph text-white font-normal leading-normal">
							We believe that alcohol and drug addiction are diseases that our
							clients do not choose; however, their success will depend on their
							willingness to attend and participate in all education and
							treatment sessions as well as recommended self-help groups.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full lg:w-1/2 relative">
						<Image
							src={duidwiimg02}
							alt="duidwiimg02"
							className="w-full object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
