'use client';

import { KeysQueryOptionsObject } from '@/app/api/queryOptionsObject';
import useQuery from '@/shared/hooks/use-query';
import Loader from '@/shared/ui/loader/loader';
import CardList from './card-list';
import { CardsProvider } from './cards-provider';

export interface RandomCardProps {
	queryOptions: KeysQueryOptionsObject;
}

export default function RandomCards({ queryOptions }: RandomCardProps) {
	const { data, isLoading, isError } = useQuery(queryOptions);

	if (isLoading) return <Loader className='mx-auto h-full' />;
	if (isError) return <p>Не удалось загрузить данные!</p>;

	return (
		data && (
			<CardsProvider initValue={data} seed={42}>
				<CardList />
			</CardsProvider>
		)
	);
}
