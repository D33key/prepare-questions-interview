import { type Question } from '@/shared/types';

export default function deterministicShuffle(
	array: Question[],
	seed: number = Math.round(Math.random() * 100) + 1,
) {
	console.log(seed);
	const shuffled = [...array];

	const random = () => {
		const x = Math.sin(seed++) * 10000;
		return x - Math.floor(x);
	};
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
