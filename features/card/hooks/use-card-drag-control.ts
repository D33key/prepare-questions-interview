import { type PanInfo, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { useCardActions } from '../../../features/card/hooks/use-card-actions';

export default function useCardDragControl(id: string) {
	const { handleSwipe: onSwipe, removeCard } = useCardActions();
	const controls = useAnimation();
	const [isDragging, setIsDragging] = useState(false);

	const handleDragEnd = async (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		setIsDragging(false);

		const threshold = 100;
		const velocityThreshold = 500;

		if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
			await controls.start({ x: '100%', opacity: 0 });
			onSwipe?.();
		} else if (
			info.offset.x < -threshold ||
			info.velocity.x < -velocityThreshold
		) {
			await controls.start({ x: '-100%', opacity: 0 });
			onSwipe?.();
		} else {
			controls.start({ x: 0, opacity: 1 });
		}

		removeCard(id);
	};

	return { controls, isDragging, setIsDragging, handleDragEnd };
}
