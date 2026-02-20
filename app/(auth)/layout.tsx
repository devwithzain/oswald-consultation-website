import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import Squares from "@/components/Squares";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="w-full grid min-h-svh lg:grid-cols-2">
				<div className="flex flex-col gap-4 p-6 md:p-10">
					<div className="flex justify-center gap-2 md:justify-start">
						<Link
							href="/"
							className="flex items-center gap-2 font-medium">
							<div>
								<Image
									src={logo}
									alt="Logo"
									width={30}
									height={30}
								/>
							</div>
							ORIA
						</Link>
					</div>
					<div className="w-full h-full flex items-center justify-center">
						<div className="w-full max-w-md">{children}</div>
					</div>
				</div>
				<div className="bg-black relative overflow-hidden hidden lg:block">
					<Squares
						speed={0.5}
						squareSize={35}
						direction="down"
						borderColor="gray"
						hoverFillColor="#222"
					/>
				</div>
			</div>
		</div>
	);
}
