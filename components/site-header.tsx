"use client";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
	const pathname = usePathname();
	const segments = pathname.split("/").filter((item) => item !== "");

	const breadcrumbs = segments
		.map((segment, index) => {
			const href = `/${segments.slice(0, index + 1).join("/")}`;
			const title = segment.charAt(0).toUpperCase() + segment.slice(1);
			return {
				title,
				href,
				isLast: index === segments.length - 1,
				segment,
			};
		})
		.filter((item) => item.segment !== "user");

	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<Breadcrumb>
					<BreadcrumbList>
						{breadcrumbs.map((item, index) => {
							const isLastItem = index === breadcrumbs.length - 1;
							return (
								<React.Fragment key={item.href}>
									<BreadcrumbItem className="hidden md:block">
										{item.isLast ? (
											<BreadcrumbPage>{item.title}</BreadcrumbPage>
										) : (
											<BreadcrumbLink href={item.href}>
												{item.title}
											</BreadcrumbLink>
										)}
									</BreadcrumbItem>
									{!isLastItem && (
										<BreadcrumbSeparator className="hidden md:block" />
									)}
								</React.Fragment>
							);
						})}
					</BreadcrumbList>
				</Breadcrumb>
				<div className="ml-auto flex items-center gap-2">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
