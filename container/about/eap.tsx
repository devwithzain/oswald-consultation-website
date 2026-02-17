"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { abouteapimg } from "@/public";

export default function Eap() {
	return (
		<div className="w-full padding-y padding-x">
			<div className="w-full flex flex-col lg:flex-row items-center gap-14">
				<div className="flex flex-col gap-5 w-full lg:w-1/2">
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full flex flex-col gap-8">
						<h2 className="heading text-[#293B48] font-bold font-advent-pro leading-tight">
							EAP ( Employee Assistance Program )
						</h2>
						<p className="paragraph text-[#293B48] font-normal leading-normal">
							O.R.E.A., LLC is an outpatient counseling and rehabilitation
							program that offers compassionate, personalized care for adults
							recovering from substance use. By combining evidence-based therapy
							with deep cultural competence and legal compliance, OREA builds
							trust with clients, courts, and the community—ensuring recovery is
							not just possible, but sustainable. O.R.E.A supports our clients
							through step of their journey.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full flex flex-col gap-8">
						<h2 className="heading text-[#293B48] font-bold font-advent-pro leading-tight">
							12 Hour Education
						</h2>
						<p className="paragraph text-[#293B48] font-normal leading-normal">
							O.R.E.A., LLC is an outpatient counseling and rehabilitation
							program that offers compassionate, personalized care for adults
							recovering from substance use. By combining evidence-based therapy
							with deep cultural competence and legal compliance, OREA builds
							trust with clients, courts, and the community—ensuring recovery is
							not just possible, but sustainable. O.R.E.A supports our clients
							through step of their journey.
						</p>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 relative">
					<div className="relative rounded-bl-2xl overflow-hidden">
						<Image
							src={abouteapimg}
							alt="abouteapimg"
							className="w-full rounded-2xl h-[700px] object-center"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
