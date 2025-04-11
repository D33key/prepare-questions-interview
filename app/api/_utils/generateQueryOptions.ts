import { URLS_KEYS_TYPE } from '@/shared/constants/url';
import { queryOptions } from '@tanstack/react-query';

export default function generateQueryOptions(
	url: URLS_KEYS_TYPE,
	isPagination: boolean,
) {
	return queryOptions({
		queryKey: [url],
		queryFn: async () => {
			console.log('url', `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}.json`);
			const urlObj = new URL(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}.json`,
			);
			urlObj.search = new URLSearchParams({
				pagination: String(isPagination),
			}).toString();
			const response = await fetch(urlObj.toString());

			return response.json();
		},
	});
}
