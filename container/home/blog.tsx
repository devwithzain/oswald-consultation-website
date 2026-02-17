"use client";
import Link from "next/link";
import Image from "next/image";
import { arrowright } from "@/public";
import { motion } from "framer-motion";
import { featuredBlogs, sideBlogs } from "@/constants";

export default function BlogSection() {
	return (
		<section className="w-full bg-[#f7f7f7] py-24 px-6 md:px-16">
			<div className="w-[80%] mx-auto flex flex-col gap-10">
				<div className="flex items-center justify-between flex-wrap gap-6">
					<div className="flex flex-col gap-2">
						<div className="w-fit bg-[#CE7E3F] text-white px-4 py-1 rounded-full">
							News
						</div>
						<h2 className="heading text-[#293B48] font-bold font-advent-pro leading-tight">
							Latest From Blogs
						</h2>
						<p className="paragraph text-[#293B48] font-normal leading-normal">
							Read our latest news and updates.
						</p>
					</div>
					<Link
						href="/blog"
						className="group inline-flex items-center gap-2 bg-[#CE7E3F] text-white px-6 py-3 rounded-md hover:bg-[#b96f34] transition-all duration-300 shadow-md">
						See All Blog
						<Image
							src={arrowright}
							alt="arrow-right"
							width={16}
							height={16}
							className="group-hover:translate-x-1 transition-transform duration-300"
						/>
					</Link>
				</div>
				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
					<div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
						{featuredBlogs.slice(0, 2).map((blog, index) => (
							<motion.div
								key={blog.id}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								className="group">
								<div className="relative h-[260px] rounded-xl overflow-hidden shadow-sm">
									<Image
										src={blog.image}
										alt={blog.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-700"
									/>
								</div>
								<div className="mt-6 space-y-2">
									<p className="text-sm font-bold text-[#293B48] leading-tight">
										{blog.category}
									</p>
									<h3 className="subHeading font-bold text-[#293B48] leading-tight font-advent-pro group-hover:text-[#CE7E3F] transition">
										{blog.title}
									</h3>
									<p className="text-sm text-[#CE7E3F] font-medium leading-tight">
										{blog.date}
									</p>
									<p className="text-[#293B48] paragraph leading-normal font-normal">
										{blog.description}
									</p>
									<div className="inline-flex items-center gap-2 text-[#CE7E3F] font-medium cursor-pointer group-hover:gap-2 transition-all duration-300">
										Continue reading...
									</div>
								</div>
							</motion.div>
						))}
					</div>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="h-fit bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
						<div className="divide-y divide-gray-200">
							{sideBlogs.map((blog, index) => (
								<div
									key={index}
									className="flex flex-col gap-2 px-8 py-5 group cursor-pointer">
									<h4 className="text-2xl font-bold text-[#293B48] leading-tight font-advent-pro group-hover:text-[#CE7E3F] transition">
										{blog.title}
									</h4>
									<p className="text-sm text-[#293B48] font-medium leading-tight">
										{blog.date} &nbsp;|&nbsp; exercise
									</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
