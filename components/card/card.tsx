import { cn } from '@/lib/utils';
import { Question } from '@/types';
import { useCardActions } from '@/utils/hooks/card/useCardActions';
import useCardDragControl from '@/utils/hooks/useCardDragControl';
import { motion } from 'framer-motion';
import React, { memo } from 'react';
import HighlightCode from '../highlight-code';

export type RemoveCard = (cardId: string) => void;
interface CardProps extends Question {
	isFlipped: boolean;
}

export default memo(function Card({
	answer,
	id,
	title,
	code,
	lists,
	isFlipped,
}: CardProps) {
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
			onClick={() => handleCardClick(id)}
			animate={controls}
			initial={{ scale: 1 }}
			whileTap={{ scale: isDragging ? 1.05 : 1 }}
			transition={{ type: 'spring', stiffness: 400, damping: 20 }}
		>
			<div
				className={cn(
					'relative w-full h-full transform-3d cursor-pointer rounded-2xl shadow-lg select-none bg-gray-50 flex flex-col justify-center items-center p-5 transition-all duration-600 ease active:cursor-grabbing',
					isFlipped && 'rotate-y-180 h-full',
				)}
			>
				<div className='absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-2xl p-5 bg-gray-50 text-gray-800'>
					<h3 className='mb-4 text-center my-auto text-2xl font-bold'>
						{title}
					</h3>
					<div className='mt-auto'>
						<p className='mt-2 text-sm text-gray-600 text-center'>
							Нажмите, чтобы перевернуть
						</p>
						<p className='mt-2 text-sm text-gray-600 text-center'>
							Свайп - пропуск вопроса
						</p>
					</div>
				</div>
				<div className='absolute w-full h-full backface-hidden flex flex-col justify-center items-center rounded-2xl p-5 bg-gray-600 text-white rotate-y-180 overflow-y-auto'>
					<div className='w-full h-full overflow-y-auto'>
						<h3>Ответ:</h3>
						<p>{answer}</p>
						{lists &&
							lists.map((list, index) => (
								<React.Fragment key={index}>
									<h4>{list.title}</h4>
									<ul>
										{list.items.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
									{list?.code && <HighlightCode code={list.code} />}
								</React.Fragment>
							))}
						{code && <HighlightCode code={code} />}
					</div>
				</div>
			</div>
		</motion.div>
	);
});
