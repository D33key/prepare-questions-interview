import { CardsAction } from '@/features/card/ui/cards-provider';
import { useContext } from 'react';

export const useCardActions = () => {
	const cardActions = useContext(CardsAction);

	if (!cardActions)
		throw new Error('useCardActions must be used within a CardProvider');

	return cardActions;
};
