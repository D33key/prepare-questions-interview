import { type Question } from '@/shared/types';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui/accordion/accordion';
import Div from '@/shared/ui/div';
import { Input } from '@/shared/ui/input/input';
import { memo } from 'react';
import Markdown from '../markdown';
import PageSubtitle from '../subtitle';
import useSearch from './hooks/use-search';

interface Props {
	data: Question[];
}

export default function AccordionWithSearch({ data }: Props) {
	const { result, setQuery } = useSearch<Question[]>(data, {
		fields: ['title', 'answer'],
		match: 'contains',
	});
	return (
		<Div noVariantsStyle className='px-3'>
			<PageSubtitle />
			<Input
				className='mb-2'
				onChange={(e) => setQuery(e.target.value)}
				type='text'
				placeholder='Поиск по вопросам...'
			/>
			<AccordionMemo data={result} />
		</Div>
	);
}

const AccordionMemo = memo(function AccordionMemo({ data }: Props) {
	return (
		<div className='flex flex-col justify-start gap-3 w-full md:flex-row flex-wrap overflow-y-auto h-(--calc-height-screen) [&>*:last-child]:mb-5'>
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
});
