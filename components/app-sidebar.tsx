"use client";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { logo } from "@/public";
import { sidebarData } from "@/constants";
import { authClient } from "@/lib/auth-client";
import { NavUser } from "@/components/nav-user";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavDocuments } from "@/components/nav-documents";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { data: session } = authClient.useSession();
	return (
		<Sidebar
			collapsible="offcanvas"
			{...props}>
			<SidebarHeader>
				<div className="flex items-center gap-2">
					<div className="size-8 rounded-md dark:bg-primary bg-secondary flex items-center justify-center">
						<Image
							src={logo}
							alt="Logo"
							width={15}
							height={15}
						/>
					</div>
					<span className="font-semibold text-lg">Oswald</span>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={sidebarData.navMain} />
				<NavDocuments items={sidebarData.documents} />
				<NavSecondary
					items={sidebarData.navSecondary}
					className="mt-auto"
				/>
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={session?.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
