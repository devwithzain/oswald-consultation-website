import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SectionCards } from "@/components/section-cards";
import { UserTable } from "@/app/admin/_components/user-table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

export default async function AdminDashboardPage() {
	const session = await auth.api.getSession({ headers: await headers() });

	if (session == null) return redirect("/sign-in");
	const hasAccess = await auth.api.userHasPermission({
		headers: await headers(),
		body: { permission: { user: ["list"] } },
	});
	if (!hasAccess.success) return redirect("/sign-in");

	const users = await auth.api.listUsers({
		headers: await headers(),
		query: {
			limit: 100,
			sortBy: "createdAt",
			sortDirection: "desc",
			filterField: "role",
			filterValue: "user",
			filterOperator: "eq",
		},
	});

	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<SectionCards />
							<div className="px-4 lg:px-6">
								<ChartAreaInteractive />
							</div>
							<UserTable data={users.users} />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
