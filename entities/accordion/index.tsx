'use client';

import { type KeysQueryOptionsObject } from '@/app/api/queryOptionsObject';
import useQuery from '@/shared/hooks/use-query';
import Loader from '@/shared/ui/loader/loader';
import AccordionWithSearch from './accordion-with-search';

export default function AccordionCards({
	queryOptions,
}: {
	queryOptions: KeysQueryOptionsObject;
}) {
	const { data, isLoading, isError } = useQuery(queryOptions);

	if (isLoading) return <Loader className='mx-auto h-full' />;
	if (isError) return <p>Не удалось загрузить данные!</p>;
	
	return <AccordionWithSearch data={data} />;
}
