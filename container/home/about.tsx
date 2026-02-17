"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutusimg, aboutcertificate } from "@/public";
import Link from "next/link";

export default function About() {
	return (
		<div className="w-full padding-x padding-y bg-[#F8F9FA]">
			<div className="w-full flex flex-col lg:flex-row items-start gap-14">
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
							className="w-full h-auto object-cover"
						/>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="bg-[#293B48] rounded-2xl shadow-xl absolute bottom-10 -right-[80%] hidden md:flex items-center py-5">
						<div className="max-w-md h-[200px] px-8 flex flex-col justify-between gap-2">
							<h2 className="text-4xl font-bold text-white leading-tight font-dm-serif-text">
								EAP
							</h2>
							<p className="paragraph text-white font-normal leading-normal">
								We use a multi-disciplinary approach by eliciting the
								appropriate changes to treat alcohol/drug use disorders.
							</p>
							<Link
								href="/eap"
								className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
								Read More
							</Link>
						</div>
						<div className="w-px h-72 bg-white" />
						<div className="max-w-md h-[200px] px-8 flex flex-col justify-between gap-2">
							<h2 className="text-4xl font-bold text-white leading-tight font-dm-serif-text">
								12 Hour Education
							</h2>
							<p className="paragraph text-white font-normal leading-normal">
								Its purpose is to educate individuals alcohol/drug use
								disorders, among them some drivers charged with DWI/DUI.
							</p>
							<Link
								href="/eap"
								className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
								Read More
							</Link>
						</div>
					</motion.div>
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
						<h2 className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight">
							DUI/DWI & Substance Abuse Services
						</h2>
					</div>
					<p className="paragraph text-[#666666] font-normal leading-normal">
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
						className="w-40 object-cover"
					/>
				</motion.div>
			</div>
		</div>
	);
}
