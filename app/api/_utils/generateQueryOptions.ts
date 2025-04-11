import { URLS_KEYS_TYPE } from '@/shared/constants/url';
import { queryOptions } from '@tanstack/react-query';

export default function generateQueryOptions(
	url: URLS_KEYS_TYPE,
	isPagination: boolean,
) {
	console.log('URL in QUERY', url)
	return queryOptions({
		queryKey: [url],
		queryFn: async () => {
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
