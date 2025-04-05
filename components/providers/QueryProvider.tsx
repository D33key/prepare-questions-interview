import { getQueryClient } from '@/app/api/_utils/get-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

import { type ProviderProps } from './type';

export default function QueryProvider({ children }: ProviderProps) {
	const queryClient = getQueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryStreamedHydration queryClient={queryClient}>
				{children}
			</ReactQueryStreamedHydration>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
