import { URLS_KEYS_TYPE } from '@/shared/constants/url';
import { queryOptions } from '@tanstack/react-query';

export default function generateQueryOptions(path: URLS_KEYS_TYPE) {
	return queryOptions({
		queryKey: [path],
		queryFn: async () => {
			try {
				const basePath =
					process.env.NEXT_PUBLIC_BASE_URL ??
					'https://d33key.github.io/prepare-questions-interview';
				const url = new URL(`${basePath}/api/${path}.json`);

				const response = await fetch(url);

				if (response.ok) {
					return response.json();
				}

				return Promise.resolve([]);
			} catch (error) {
				console.log('Ошибка при запросе', error);
				throw new Error('Ошибка при запросе');
			}
		},
	});
}
