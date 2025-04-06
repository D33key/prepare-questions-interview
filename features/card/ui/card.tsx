import { useCardActions } from '@/features/card/hooks/use-card-actions';
import { Question } from '@/shared/types';
import Div from '@/shared/ui/div';
import Hint from '@/shared/ui/hint';
import { motion } from 'framer-motion';
import { memo } from 'react';
import useCardDragControl from '../hooks/use-card-drag-control';
import Markdown from '@/entities/markdown';

export type RemoveCard = (cardId: string) => void;

interface CardProps extends Question {
	isFlipped: boolean;
}

export default memo(function Card({ id, title, answer, isFlipped }: CardProps) {
	const { handleCardClick } = useCardActions();
	const { controls, handleDragEnd, isDragging, setIsDragging } =
		useCardDragControl(id);

	return (
		<motion.div
			className='w-full h-full perspective-[1000px] cursor-grab'
			drag='x'
			dragConstraints={{ left: 0, right: 0 }}
			onDragStart={() => setIsDragging(true)}
			onDragEnd={handleDragEnd}
			onClick={() => {
				if (!isDragging) {
					handleCardClick(id);
				}
			}}
			animate={controls}
			initial={{ scale: 1 }}
			whileTap={{ scale: isDragging ? 1.05 : 1 }}
			transition={{ type: 'spring', stiffness: 400, damping: 40 }}
		>
			<Div
				variant='cardWrapper'
				className={isFlipped ? 'rotate-y-180 h-full' : ''}
			>
				<Div variant='frontCard'>
					<h3 className='mb-4 text-center my-auto text-2xl font-bold'>
						{title}
					</h3>
					<Div noVariantsStyle className='mt-auto'>
						<Hint>Нажмите, чтобы перевернуть</Hint>
						<Hint>Свайп - пропуск вопроса</Hint>
					</Div>
				</Div>
				<Div variant='backCard'>
					<Div variant='scrollY' className='card-scrollable-container pr-2'>
						<Markdown answer={answer} />
					</Div>
				</Div>
			</Div>
		</motion.div>
	);
});
