import React from "react";

export default function LegalContent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full padding-x padding-y bg-white">
			<div className="max-w-4xl mx-auto flex flex-col gap-8 text-[#293B48]">
				{children}
			</div>
		</div>
	);
}
