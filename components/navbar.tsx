import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { navbarlinks } from "@/constants";

export default function Navbar() {
	return (
		<div className="w-full absolute top-0 left-0 z-50 bg-white padding-x py-3">
			<div className="w-full flex items-center justify-between gap-5 relative">
				<div className="bg-white px-6 py-4 rounded-b-xl absolute top-[-12px] left-0">
					<Image
						src={logo}
						alt="logo"
						width={100}
						height={100}
						className="w-24 object-contain"
					/>
				</div>
				<div className="" />
				<div className="flex items-center justify-center">
					<ul className="flex items-center gap-5">
						{navbarlinks.map((link) => (
							<li key={link.id}>
								<Link
									href={link.href}
									className="paragraph leading-tight tracking-tight font-normal text-[#293B48]">
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="px-10 py-2 rounded-md bg-[#293B48]">
					<p className="paragraph text-white leading-tight font-normal tracking-tight">
						Login
					</p>
				</div>
			</div>
		</div>
	);
}
