"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { arrowright } from "@/public";
import SplitText from "@/components/split-text";

export default function ContactForm() {
	return (
		<>
			<div className="w-full padding-x padding-y bg-[#293B48]">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="w-[70%] mx-auto bg-[#F8F9FA] rounded-2xl p-10 flex flex-col gap-10 border border-[#A1A1A1]">
					<SplitText
						text="Contact Us"
						className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight"
						delay={20}
						duration={1}
						ease="power3.out"
						splitType="chars"
						from={{ opacity: 0, y: 40 }}
						to={{ opacity: 1, y: 0 }}
						threshold={0.1}
						rootMargin="-100px"
						textAlign="center"
					/>
					<div className="w-full bg-white rounded-3xl px-8 py-10">
						<form className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="flex flex-col gap-2">
								<label className="paragraph font-medium text-[#293B48] leading-tight">
									First Name
								</label>
								<input
									type="text"
									placeholder="John"
									className="w-full px-6 py-3 rounded-xl bg-white border border-[#A1A1A1] focus:outline-none focus:border-[#CE7E3F] transition-colors"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="paragraph font-medium text-[#293B48] leading-tight">
									Last Name
								</label>
								<input
									type="text"
									placeholder="Doe"
									className="w-full px-6 py-3 rounded-xl bg-white border border-[#A1A1A1] focus:outline-none focus:border-[#CE7E3F] transition-colors"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="paragraph font-medium text-[#293B48] leading-tight">
									Email Address
								</label>
								<input
									type="email"
									placeholder="john@example.com"
									className="w-full px-6 py-3 rounded-xl bg-white border border-[#A1A1A1] focus:outline-none focus:border-[#CE7E3F] transition-colors"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label className="paragraph font-medium text-[#293B48] leading-tight">
									Phone
								</label>
								<input
									type="tel"
									placeholder="+1 (555) 123-4567"
									className="w-full px-6 py-3 rounded-xl bg-white border border-[#A1A1A1] focus:outline-none focus:border-[#CE7E3F] transition-colors"
								/>
							</div>
							<div className="w-full flex flex-col gap-2 md:col-span-2">
								<label className="paragraph font-medium text-[#293B48] leading-tight">
									Friends Email
								</label>
								<input
									type="email"
									placeholder="john@example.com"
									className="w-full px-6 py-3 rounded-xl bg-white border border-[#A1A1A1] focus:outline-none focus:border-[#CE7E3F] transition-colors resize-none"
								/>
							</div>
							<div className="w-full flex flex-col gap-2 md:col-span-2">
								<label className="paragraph font-medium text-[#293B48] leading-tight">
									Message
								</label>
								<textarea
									rows={6}
									placeholder="I need help with..."
									className="w-full px-6 py-3 rounded-xl bg-white border border-[#A1A1A1] focus:outline-none focus:border-[#CE7E3F] transition-colors resize-none"
								/>
							</div>
							<div className="md:col-span-2">
								<button
									type="submit"
									className="w-fit group inline-flex items-center gap-2 bg-[#CE7E3F] text-white px-6 py-3 rounded-md hover:bg-[#b96f34] transition-all duration-300 shadow-md cursor-pointer">
									Submit Message
									<Image
										src={arrowright}
										alt="arrow-right"
										width={16}
										height={16}
										className="group-hover:translate-x-1 transition-transform duration-300"
									/>
								</button>
							</div>
						</form>
					</div>
				</motion.div>
			</div>
		</>
	);
}
