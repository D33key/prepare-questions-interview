import AppSidebar from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-dvw h-dvh overflow-hidden'>
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
