'use client';
import AccordionCards from '@/entities/accordion';
import { useEffect, useState } from 'react';

export default function Page() {
	const [a, setA] = useState([]);

	useEffect(() => {
		fetch('/api/javascript.json')
			.then((res) => res.json())
			.then(setA);
	}, []);

	console.log(a);

	return a && <AccordionCards data={a} />;
}
