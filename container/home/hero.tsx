"use client";
import Link from "next/link";
import Image from "next/image";
import { certificate } from "@/public";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, imageVariants } from "@/motion";

export default function Hero() {
	return (
		<div className="w-full h-dvh">
			<div className="w-full h-full bg-[url('/homeheroimg.png')] bg-cover bg-center bg-no-repeat">
				<div className="w-full h-full flex items-end justify-end padding-x padding-y relative z-50">
					<div className="w-full flex items-center justify-center mb-10">
						<div className="w-[80%] flex items-center justify-between gap-10">
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="max-w-4xl flex flex-col gap-5">
								<motion.h1
									variants={itemVariants}
									className="heading text-white font-medium font-dm-serif-text leading-tight">
									O.R.E.A, LLC is a Maryland State Licensed and ACHC Accredited
									Early Intervention Education, Counseling and Treatment
									program.
								</motion.h1>
								<motion.p
									variants={itemVariants}
									className="paragraph text-white leading-normal font-normal">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
									exercitationem magni eum perspiciatis sequi quidem similique,
									adipisci quasi porro expedita esse. Corporis exercitationem
									sapiente dolorem repudiandae magni qui reiciendis nulla.
								</motion.p>
								<motion.div
									variants={itemVariants}
									className="flex items-center gap-5">
									<Link
										href="/login"
										className="px-10 py-3 rounded-md bg-[#CE7E3F] paragraph text-white leading-tight font-normal tracking-tight hover:brightness-110 transition-all duration-300 hover:scale-105 active:scale-95">
										Start Your Healing Journey
									</Link>
									<Link
										href="/register"
										className="px-10 py-3 rounded-md bg-transparent border border-white paragraph text-white leading-tight font-normal tracking-tight hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95">
										Schedule Your Counseling Session
									</Link>
								</motion.div>
							</motion.div>
							<motion.div
								variants={imageVariants}
								initial="hidden"
								animate="visible">
								<Image
									src={certificate}
									alt="certificate"
									width={400}
									height={400}
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
