'use client';
import { URLS } from '@/shared/constants/url';
import AnimatedText from '@/shared/ui/animated-text';
import { Button } from '@/shared/ui/button/button';
import Div from '@/shared/ui/div';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='min-h-screen p-8 flex w-full flex-col justify-center items-center gap-10'>
			<AnimatedText
				className='text-3xl'
				text='Подготовка к собеседованию для Frontend разработчиков'
				isHeader
			/>
			<Div noVariantsStyle className='flex gap-5'>
				<Button asChild>
					<Link href={URLS.javascript.url}>Javascript</Link>
				</Button>
				<Button asChild>
					<Link href={URLS.react.url}>React</Link>
				</Button>
			</Div>
		</div>
	);
}
