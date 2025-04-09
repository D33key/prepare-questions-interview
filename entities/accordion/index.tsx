'use client';

import { type KeysQueryOptionsObject } from '@/app/api/queryOptionsObject';
import useQuery from '@/shared/hooks/use-query';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui/accordion/accordion';
import Loader from '@/shared/ui/loader/loader';
import Markdown from '../markdown';

export default function AccordionCards({
	queryOptions,
}: {
	queryOptions: KeysQueryOptionsObject;
}) {
	const { data, isLoading, isError } = useQuery(queryOptions);

	if (isLoading) return <Loader className='mx-auto h-full' />;
	if (isError) return <p>Не удалось загрузить данные!</p>;

	return (
		<div className='flex flex-col gap-3 w-full md:flex-row flex-wrap px-3 overflow-y-auto h-(--calc-height)'>
			{data.map((card) => (
				<Accordion
					key={card.id}
					type='single'
					collapsible
					className='w-full size-fit flex-auto'
				>
					<AccordionItem
						value='item-1'
						className='border rounded-lg shadow-sm h-full'
					>
						<AccordionTrigger className='px-4'>{card.title}</AccordionTrigger>
						<AccordionContent className='px-4'>
							<Markdown answer={card.answer} />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</div>
	);
}
