import { URLS } from '@/shared/constants/url';
import { Gem, Hexagon } from 'lucide-react';

function generateTypesOfQuestions(
	url: (typeof URLS)[keyof typeof URLS],
	pages: string[] = ['Случайные карточки', 'Все карточки'],
) {
	return pages.map((page, index) => ({
		id: index,
		text: page,
		url: url + url.prefix[index],
	}));
}

export const items = [
	{
		title: 'Javascript',
		typeOfQuestions: generateTypesOfQuestions(URLS.javascript),
		icon: Hexagon,
	},
	{
		title: 'React',
		typeOfQuestions: generateTypesOfQuestions(URLS.javascript),
		icon: Gem,
	},
];
