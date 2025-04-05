import { queryOptions as queryOptionsTanstack } from '@tanstack/react-query';

export const queryOptions = queryOptionsTanstack({
	queryKey: ['javascript'],
	queryFn: async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/javascript.json`,
		);

		return response.json();
	},
});
