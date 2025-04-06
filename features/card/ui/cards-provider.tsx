import { type Question } from '@/shared/types';
import {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import shuffleArray from '@/shared/utils/shuffleArray';
import { type ProviderProps } from '@/shared/ui/providers/types';

interface CardsContext {
	expandedCardId: string | null;
	cardsState: Question[];
}

type FunctionWithCardId = (cardId: string) => void;

interface CardsActions {
	handleCardClick: FunctionWithCardId;
	removeCard: FunctionWithCardId;
	handleSwipe: () => void;
	resetCards: () => void;
}

export const CardsContext = createContext<CardsContext>({
	expandedCardId: null,
	cardsState: [],
});
export const CardsAction = createContext<CardsActions | null>(null);

export function CardsProvider({
	children,
	initValue,
	seed,
}: ProviderProps & { initValue: Question[]; seed: number }) {
	const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
	const [cardsState, setCardsState] = useState<Question[]>(() =>
		shuffleArray(initValue, seed),
	);

	const expandedCardIdRef = useRef(expandedCardId);

	useEffect(() => {
		expandedCardIdRef.current = expandedCardId;
	}, [expandedCardId]);

	const handleCardClick = useCallback((cardId: string) => {
		const currentExpandedId = expandedCardIdRef.current;
		setExpandedCardId(currentExpandedId === cardId ? null : cardId);
	}, []);

	const removeCard = useCallback((cardId: string) => {
		setCardsState((prev) => prev.filter((card) => card.id !== cardId));
	}, []);

	const handleSwipe = useCallback(() => {
		setExpandedCardId(null);
	}, []);

	const resetCards = useCallback(() => {
		setExpandedCardId(null);
		setCardsState(shuffleArray(initValue));
	}, []);

	const value = useMemo(
		() => ({ expandedCardId, cardsState }),
		[expandedCardId, cardsState],
	);

	const actions = useMemo(
		() => ({ handleCardClick, removeCard, handleSwipe, resetCards }),
		[handleCardClick, removeCard, handleSwipe, resetCards],
	);

	return (
		<CardsContext.Provider value={value}>
			<CardsAction.Provider value={actions}>{children}</CardsAction.Provider>
		</CardsContext.Provider>
	);
}
