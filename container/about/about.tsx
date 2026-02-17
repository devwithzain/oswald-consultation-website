"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutusimg, aboutcertificate } from "@/public";

export default function About() {
	return (
		<div className="w-full padding-x padding-y bg-[#293B48]">
			<div className="w-full flex flex-col lg:flex-row items-center gap-14">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 relative">
					<div className="relative rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src={aboutusimg}
							alt="professional"
							className="w-full h-[700px] object-center"
						/>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-full lg:w-1/2 flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<p className="text-base text-[#CE7E3F] font-medium leading-tight tracking-tight bg-[#CE7E3F]/10 w-fit px-4 py-2 rounded-full">
							About Us
						</p>
						<h2 className="heading text-white font-medium font-dm-serif-text leading-tight">
							DUI/DWI & Substance Abuse Services
						</h2>
					</div>
					<p className="paragraph text-white font-normal leading-normal">
						O.R.E.A., LLC is an outpatient counseling and rehabilitation program
						that offers compassionate, personalized care for adults recovering
						from substance use. By combining evidence-based therapy with deep
						cultural competence and legal compliance, OREA builds trust with
						clients, courts, and the community—ensuring recovery is not just
						possible, but sustainable. O.R.E.A supports our clients through step
						of their journey.
					</p>
					<Image
						src={aboutcertificate}
						alt="accreditation"
						className="w-80 object-cover"
					/>
				</motion.div>
			</div>
		</div>
	);
}
