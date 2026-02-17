import { aboutllcimg } from "@/public";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-full padding-x padding-y">
			<div className="w-full flex flex-col gap-8 items-center justify-center">
				<h1 className="heading text-[#293B48] font-medium font-dm-serif-text leading-tight">
					O.R.E.A, LLC
				</h1>
				<Image
					src={aboutllcimg}
					alt="aboutllcimg"
				/>
			</div>
		</div>
	);
}
