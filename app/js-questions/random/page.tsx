import RandomCards from '@/features/card/ui';
import { headers } from 'next/headers';

export default async function Page() {
	const headersList = await headers();
	const userAgent = headersList.get('user-agent') || '';

	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent,
		) || /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent);

	return <RandomCards isMobile={isMobile} queryOptions='javascript' />;
}
