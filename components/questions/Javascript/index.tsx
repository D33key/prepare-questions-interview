'use client';

import { queryOptions } from '@/app/api/javascript.json/queryOptions';
import CardList from '@/components/card/card-list';
import { CardsProvider } from '@/components/providers/ContextProvider';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

export interface JavascriptProps {
	isMobile: boolean;
}

export default function Javascript({ isMobile }: JavascriptProps) {
	const { data } = useSuspenseQuery(queryOptions);

	return (
		data && (
			<Suspense fallback={<p>Загрузка...</p>}>
				<CardsProvider initValue={data} seed={42}>
					<CardList isMobile={isMobile} />
				</CardsProvider>
			</Suspense>
		)
	);
}
