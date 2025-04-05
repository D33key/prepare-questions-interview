import { CardsAction } from '@/components/providers/ContextProvider';
import { useContext } from 'react';

export const useCardActions = () => {
	const cardActions = useContext(CardsAction);

	if (!cardActions)
		throw new Error('useCardActions must be used within a CardProvider');

	return cardActions;
};
