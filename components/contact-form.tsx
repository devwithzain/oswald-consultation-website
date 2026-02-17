"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SplitText from "@/components/split-text";
import { arrowright, headphones, mail } from "@/public";

export default function ContactForm() {
	return (
		<>
			<div className="w-full min-h-dvh padding-x padding-y bg-[url('/quotebg.png')] bg-center bg-cover bg-no-repeat relative">
				<div className="w-full flex flex-col gap-10 items-center">
					<div className="w-full flex flex-col gap-2 max-w-2xl items-center text-center">
						<p className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
							Get A Quote
						</p>
						<SplitText
							text="Get Support for Your Counseling and Recovery Needs"
							className="heading text-white font-medium font-dm-serif-text leading-tight"
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
						<p className="paragraph text-white font-normal leading-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</p>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-[70%] mx-auto bg-[#F8F9FA] rounded-2xl p-10 flex flex-col lg:flex-row gap-10 shadow-sm border border-gray-100 absolute -bottom-40">
						<div className="w-full lg:w-1/2 flex flex-col gap-12">
							<div className="flex flex-col gap-5">
								<div className="flex flex-col gap-3 max-w-lg">
									<div className="w-fit bg-[#CE7E3F] text-white px-4 py-2 rounded-full">
										Need more help?
									</div>
									<h2 className="subHeading text-[#293B48] font-medium font-dm-serif-text leading-tight">
										Get Support for Your <br />
										Counseling and Recovery Needs
									</h2>
									<p className="paragraph text-[#293B48] font-normal leading-normal">
										Lorem Ipsum has been the industry&apos;s standard dummy text
										ever since the 1500s
									</p>
								</div>
								<div className="flex items-start gap-6">
									<Image
										src={headphones}
										alt="headphones"
										width={60}
										height={60}
										className="object-contain"
									/>
									<div className="flex flex-col gap-1">
										<p className="text-base text-[#293B48] font-bold leading-tight">
											Customer Service
										</p>
										<p className="paragraph font-bold text-[#293B48] leading-tight font-dm-serif-text">
											+(301) 439-6700
										</p>
									</div>
								</div>
								<div className="flex items-start gap-6">
									<Image
										src={mail}
										alt="mail"
										width={60}
										height={60}
										className="object-contain"
									/>
									<div className="flex flex-col gap-1">
										<p className="text-base text-[#293B48] font-bold leading-tight">
											Send Enquiry
										</p>
										<p className="paragraph font-bold text-[#293B48] leading-tight font-dm-serif-text">
											Dummy@gmail.com
										</p>
									</div>
								</div>
							</div>
							<div className="w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
								<div className="absolute inset-0 bg-[#293B48]/5 flex items-center justify-center">
									<iframe
										className="w-full h-full rounded-lg"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
										aria-hidden="false"
										loading="lazy"
										tabIndex={0}
										style={{ border: "0px" }}
									/>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2 bg-white rounded-3xl px-8 py-10 shadow-xl">
							<form className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div className="flex flex-col gap-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										First Name
									</label>
									<input
										type="text"
										placeholder="John"
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										Last Name
									</label>
									<input
										type="text"
										placeholder="Doe"
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										Email Address
									</label>
									<input
										type="email"
										placeholder="john@example.com"
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										Phone
									</label>
									<input
										type="tel"
										placeholder="+1 (555) 123-4567"
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										Date
									</label>
									<input
										type="date"
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										Time
									</label>
									<input
										type="time"
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors"
									/>
								</div>
								<div className="flex flex-col gap-2 md:col-span-2">
									<label className="paragraph font-medium text-[#293B48] leading-tight">
										Message
									</label>
									<textarea
										rows={6}
										placeholder="I need help with..."
										className="w-full px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-[#CE7E3F] transition-colors resize-none"
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
			</div>
			<div className="w-full h-40 bg-[#293B48]" />
		</>
	);
}
