"use client";
import { useState } from "react";
import { faqsData } from "@/constants";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Referral() {
	const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setExpandedFaqIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section className="w-full bg-[#f7f7f7] py-24 px-6 md:px-16">
			<div className="w-[80%] mx-auto flex flex-col gap-10">
				<div className="flex flex-col gap-2">
					<div className="w-fit bg-[#CE7E3F] text-white px-4 py-1 rounded-full">
						Faq&apos;s
					</div>
					<h2 className="heading text-[#293B48] font-bold font-advent-pro leading-tight">
						Frequently Asked Questions
					</h2>
					<p className="paragraph text-[#293B48] font-normal leading-normal">
						Here are some of the most common questions about our services.
					</p>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex flex-col gap-4">
					{faqsData.map((faq, index) => {
						const isOpen = expandedFaqIndex === index;
						return (
							<div
								key={faq.id}
								className={`border border-black rounded-lg overflow-hidden transition-all duration-300 ${
									isOpen ? "bg-[#293B48]" : "bg-[#EAECEE]"
								}`}>
								<button
									onClick={() => toggleFaq(index)}
									className="w-full flex items-center justify-between px-6 py-5 text-left">
									<h3
										className={`text-base font-semibold pr-4 ${isOpen ? "text-white" : "text-[#293B48]"}`}>
										{faq.question}
									</h3>

									<motion.div
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-md ${isOpen ? "bg-white" : "bg-[#293B48]"}`}>
										{isOpen ? (
											<Minus
												className={`${isOpen ? "text-[#293B48]" : "text-white"}`}
												size={18}
											/>
										) : (
											<Plus
												className={`${isOpen ? "text-[#293B48]" : "text-white"}`}
												size={18}
											/>
										)}
									</motion.div>
								</button>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											key="content"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.35, ease: "easeInOut" }}
											className="overflow-hidden">
											<div className="border-t border-[#DCE2E1] px-6 py-5">
												<p
													className={`text-base ${isOpen ? "text-white" : "text-[#293B48]"}`}>
													{faq.answer}
												</p>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
