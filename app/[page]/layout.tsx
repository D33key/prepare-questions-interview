import AppSidebar from '@/entities/app-sidebar';
import { SidebarProvider } from '@/shared/ui/sidebar/sidebar';

export default function PageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='w-dvw h-dvh overflow-hidden'>{children}</main>
		</SidebarProvider>
	);
}
