'use client';

import { queryOptions } from '@/app/api/javascript.json/queryOptions';
import CardList from '@/components/card/card-list';
import { CardsProvider } from '@/components/providers/ContextProvider';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface JavascriptProps {
	isMobile: boolean;
}

export default function Javascript({ isMobile }: JavascriptProps) {
	const { data } = useSuspenseQuery(queryOptions);

	return (
		data && (
			<CardsProvider initValue={data} seed={42}>
				<CardList isMobile={isMobile} />
			</CardsProvider>
		)
	);
}
