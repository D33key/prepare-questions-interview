import { redirect } from 'next/navigation';
import { PageParams } from './_types';
import { URLS_KEYS, type URLS_KEYS_TYPE } from '@/shared/constants/url';

interface StaticParams {
	page: URLS_KEYS_TYPE;
}

export function generateStaticParams() {
	return [{ page: 'javascript' }, { page: 'react' }] as StaticParams[];
}

export default async function Page({ params }: PageParams) {
	const { page } = await params;

	if (!URLS_KEYS.includes(page)) redirect('/');
	redirect(`/${page}/all`);
}
