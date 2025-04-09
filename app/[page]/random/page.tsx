import { PageParams } from '@/app/[page]/_type';
import RandomCards from '@/features/card/ui';
import { URLS_KEYS } from '@/shared/constants/url';
import { redirect } from 'next/navigation';
import isMobileOnServer from '../_utils/isMobileOnServer';

export default async function Page({ params }: PageParams) {
	const { page } = await params;

	if (!URLS_KEYS.includes(page)) redirect('/');

	const isMobile = await isMobileOnServer();

	return <RandomCards isMobile={isMobile} queryOptions={page} />;
}
