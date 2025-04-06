import { type Question } from '@/shared/types';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/ui/accordion/accordion';
import Markdown from '../markdown';

export default function AccordionCards({ data }: { data: Question[] }) {
	return (
		<div className='flex flex-col gap-6 w-full md:flex-row flex-wrap'>
			{data.map((card) => (
				<Accordion
					key={card.id}
					type='single'
					collapsible
					className='w-full md:w-1/3 size-fit'
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
