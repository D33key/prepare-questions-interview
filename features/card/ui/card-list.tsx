import { useCardInfo } from '@/features/card/hooks/use-card-info';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './card';
import CardResetButton from './reset-button';
import { type JavascriptProps } from '.';
import Div from '@/shared/ui/div';

export default function CardList({
	isMobile,
}: Pick<JavascriptProps, 'isMobile'>) {
	const { cardsState, expandedCardId } = useCardInfo();

	return (
		<Div variant='cardsList'>
			{cardsState.length > 0 ? (
				<Div variant='cardsContainer'>
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
				</Div>
			) : (
				<CardResetButton />
			)}
		</Div>
	);
}
