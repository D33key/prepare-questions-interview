import Link from 'next/link';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from '../ui/sidebar';
import { Gem, Hexagon } from 'lucide-react';
import { URLS } from '@/constants/url';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '../ui/collapsible';

const items = [
	{
		title: 'Javascript',
		typeOfQuestions: [
			{
				id: 1,
				text: 'Случайные карточки',
				url: URLS.javascript + '/random',
			},
			{
				id: 2,
				text: 'Все карточки',
				url: URLS.javascript + '/all',
			},
		],
		icon: Hexagon,
	},
	{
		title: 'React',
		url: URLS.react,
		icon: Gem,
	},
];
export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Test your knowledge</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<Collapsible key={item.title} className='group/collapsible'>
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton>
												<item.icon />
												<span>{item.title}</span>
											</SidebarMenuButton>
										</CollapsibleTrigger>
										<CollapsibleContent>
											<SidebarMenuSub>
												{item.typeOfQuestions?.map((variant) => (
													<SidebarMenuSubItem key={variant.id}>
														<Link href={variant.url}>{variant.text}</Link>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</CollapsibleContent>
									</SidebarMenuItem>
								</Collapsible>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
