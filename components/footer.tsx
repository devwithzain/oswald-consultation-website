"use client";
import Link from "next/link";
import Image from "next/image";
import { navbarlinks } from "@/constants";
import { arrowright, facebook, instagram, linkedin, logo } from "@/public";

export default function Footer() {
	return (
		<footer className="w-full bg-[#293B48]">
			<div className="w-[80%] mx-auto">
				<div className="flex flex-col gap-16 padding-y">
					<div className="bg-white/15 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-5">
						<div className="max-w-2xl flex flex-col gap-3">
							<h2 className="subHeading font-semibold text-white font-advent-pro leading-tight">
								We Welcome You To Givechance To Serve You
							</h2>
							<p className="paragraph text-white font-normal leading-normal">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
								tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
							</p>
						</div>
						<Link
							href="/contact"
							className="group bg-[#CE7E3F] text-white transition px-6 py-3 rounded-full flex items-center gap-2 font-medium paragraph leading-tight">
							Get an Appointment
							<Image
								src={arrowright}
								alt="arrow"
								width={16}
								height={16}
								className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white"
							/>
						</Link>
					</div>
					<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
						<div className="flex flex-col items-start gap-6">
							<div className="bg-white p-4 rounded-xl">
								<Image
									src={logo}
									alt="logo"
									width={80}
									height={80}
								/>
							</div>
						</div>
						<div className="flex flex-wrap gap-3 items-center justify-center paragraph text-gray-300">
							{navbarlinks.map((link) => (
								<Link
									key={link.id}
									href={link.href}
									className="paragraph text-white hover:text-[#CE7E3F] transition font-normal leading-tight">
									{link.title}
								</Link>
							))}
							<div className="w-full border-b border-white/20" />
							<div className="w-full flex items-center justify-between gap-5">
								<button className="group bg-[#CE7E3F] text-white flex items-center gap-4 w-fit px-6 py-3 rounded-md transition-colors">
									Join Now
									<Image
										src={arrowright}
										alt="arrow"
										className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white"
									/>
								</button>
								<div className="flex gap-3 paragraph text-gray-300">
									<Link
										href="/terms-of-use"
										className="paragraph text-white hover:text-[#CE7E3F] transition font-normal leading-tight">
										Terms of use
									</Link>
									<Link
										href="/privacy-policy"
										className="paragraph text-white hover:text-[#CE7E3F] transition font-normal leading-tight">
										Privacy Policy
									</Link>
									<Link
										href="/cookie-policy"
										className="paragraph text-white hover:text-[#CE7E3F] transition font-normal leading-tight">
										Cookie Policy
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-white/20 py-4 flex flex-col md:flex-row items-center justify-between gap-6 paragraph text-gray-400">
					<p className="paragraph text-white font-normal leading-normal">
						Copyright © {new Date().getFullYear()}, All Rights Reserved.
					</p>
					<div className="flex gap-4">
						<div className="w-10 h-10 p-3 rounded-full border border-[#CE7E3F] flex items-center justify-center cursor-pointer">
							<Image
								src={linkedin}
								alt="linkedin"
								width={16}
								height={16}
								className="w-4"
							/>
						</div>
						<div className="w-10 h-10 p-3 rounded-full border border-[#CE7E3F] flex items-center justify-center cursor-pointer">
							<Image
								src={facebook}
								alt="facebook"
								width={16}
								height={16}
								className="w-2"
							/>
						</div>
						<div className="w-10 h-10 p-3 rounded-full border border-[#CE7E3F] flex items-center justify-center cursor-pointer">
							<Image
								src={instagram}
								alt="instagram"
								className="w-4"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
