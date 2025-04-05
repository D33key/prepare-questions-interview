import { useCardInfo } from '@/utils/hooks/card/useCardInfo';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './card';
import CardResetButton from './card-reset';
import { type JavascriptProps } from '../questions/Javascript';

interface CardListProps extends JavascriptProps {}

export default function CardList({ isMobile }: CardListProps) {
	const { cardsState, expandedCardId } = useCardInfo();

	return (
		<div className='flex flex-col justify-center items-center p-5 w-full min-h-screen gap-5'>
			{cardsState.length > 0 ? (
				<div className='relative w-full max-w-[500px] h-[400px] mx-auto'>
					<AnimatePresence>
						{cardsState.map((card, index) => {
							const isTopCard = index === cardsState.length - 1;
							const isFlipped = expandedCardId === card.id;

							return (
								<motion.div
									key={card.id}
									className='w-full h-full flex justify-center items-center origin-center backface-hidden will-change-transform'
									style={{
										position: isTopCard ? 'relative' : 'absolute',
										zIndex: cardsState.length - index,
									}}
									initial={{ scale: 0.9, opacity: 0, y: 50 }}
									animate={{
										scale: isFlipped && !isMobile ? 1.5 : 1,
										opacity: 1,
										transition: {
											type: 'spring',
											damping: 10,
											delay: index * 0.1,
										},
									}}
									exit={{
										opacity: 0,
										scale: 0.8,
										transition: { duration: 0.2 },
									}}
								>
									<Card {...card} isFlipped={expandedCardId === card.id} />
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>
			) : (
				<CardResetButton />
			)}
		</div>
	);
}
