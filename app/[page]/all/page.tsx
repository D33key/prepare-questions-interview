import { PageParams } from '@/app/[page]/_type';
import AccordionCards from '@/entities/accordion';
import { URLS_KEYS } from '@/shared/constants/url';
import { redirect } from 'next/navigation';

export default async function Page({ params }: PageParams) {
	const { page } = await params;

	if (!URLS_KEYS.includes(page)) redirect('/');

	return <AccordionCards queryOptions={page} />;
}
