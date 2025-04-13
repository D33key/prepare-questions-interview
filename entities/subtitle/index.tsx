import { type URLS_KEYS_TYPE } from '@/shared/constants/url';
import Subtitle from '@/shared/ui/subtitle';
import capitalizeFirstLetter from '@/shared/utils/capitalizeFirstLetter';
import { useParams } from 'next/navigation';
import React from 'react';

type Params = { page: URLS_KEYS_TYPE };

export default function PageSubtitle() {
	const { page } = useParams<Params>();
	return (
		<Subtitle className='text-3xl font-bold py-4'>
			Вопросы по {capitalizeFirstLetter(page)}
		</Subtitle>
	);
}
