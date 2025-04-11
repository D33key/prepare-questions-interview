import { URLS_KEYS_TYPE } from '@/shared/constants/url';
import { queryOptions } from '@tanstack/react-query';

export default function generateQueryOptions(url: URLS_KEYS_TYPE) {
	return queryOptions({
		queryKey: [url],
		queryFn: async () => {
			const basePath =
				process.env.NEXT_PUBLIC_BASE_URL ??
				'd33key.github.io/prepare-questions-interview';

			const response = await fetch(`${basePath}/api/${url}.json`);

			return response.json();
		},
	});
}
