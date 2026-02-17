"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredBlogs } from "@/constants";

export default function Blog() {
	return (
		<section className="w-full bg-[#f7f7f7] py-24 px-6 md:px-16">
			<div className="w-[80%] mx-auto flex flex-col gap-10">
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
				<div className="w-full">
					<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
						{[...featuredBlogs, ...featuredBlogs, ...featuredBlogs].map(
							(blog, index) => (
								<motion.div
									key={blog.id * index + 1}
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
							),
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
