import { PageParams } from '@/app/[page]/_type';
import AccordionCards from '@/entities/accordion';
import { URLS_KEYS, type URLS_KEYS_TYPE } from '@/shared/constants/url';
import capitalizeFirstLetter from '@/shared/utils/capitalizeFirstLetter';
import { redirect } from 'next/navigation';

interface StaticParams {
	page: URLS_KEYS_TYPE;
}

export function generateStaticParams() {
	return [{ page: 'javascript' }, { page: 'react' }] as StaticParams[];
}

export async function generateMetadata({ params }: PageParams) {
	const { page } = await params;

	const capitalizedTitle = capitalizeFirstLetter(page);

	return {
		title: `Вопросы по ${capitalizedTitle}`,
		description: `Все ключевые вопросы по ${capitalizedTitle} для собеседования: от основ до сложных тем. Четкие ответы с примерами кода. Проверь себя и подготовься к интервью!`,
	};
}

export default async function Page({ params }: PageParams) {
	const { page } = await params;

	if (!URLS_KEYS.includes(page)) redirect('/');

	return <AccordionCards queryOptions={page} />;
}
