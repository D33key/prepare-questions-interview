'use client';

import {
	KeysQueryOptionsObject,
	queryOptionsObject,
} from '@/app/api/queryOptionsObject';
import Loader from '@/shared/ui/loader/loader';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CardsProvider } from './cards-provider';
import CardList from './card-list';

export interface RandomCardProps {
	isMobile: boolean;
	queryOptions: KeysQueryOptionsObject;
}

export default function RandomCards({
	isMobile,
	queryOptions,
}: RandomCardProps) {
	const { data, isLoading, isError } = useSuspenseQuery(
		queryOptionsObject[queryOptions],
	);

	if (isLoading) return <Loader className='mx-auto h-full' />;
	if (isError) return <p>Не удалось загрузить данные!</p>;

	return (
		data && (
			<CardsProvider initValue={data} seed={42}>
				<CardList isMobile={isMobile} />
			</CardsProvider>
		)
	);
}
