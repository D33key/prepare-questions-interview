import { CardsContext } from '@/components/providers/ContextProvider';
import { useContext } from 'react';

export const useCardInfo = () => {
	const cardInfo = useContext(CardsContext);

	if (!cardInfo)
		throw new Error('useCardInfo must be used within a CardProvider');

	return cardInfo;
};
