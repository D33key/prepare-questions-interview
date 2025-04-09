import { redirect } from 'next/navigation';
import { PageParams } from './_type';
import { URLS_KEYS } from '@/shared/constants/url';

export default async function Page({ params }: PageParams) {
	const { page } = await params;

	if (!URLS_KEYS.includes(page)) redirect('/');
	redirect(`/${page}/all`);
}
