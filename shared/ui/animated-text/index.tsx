'use client';
import { cn } from '@/shared/lib/utils';
import { motion, type Variants } from 'framer-motion';

const initialContainerVariants = {
	hidden: { opacity: 0 },
	visible: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.03, delayChildren: 0.01 * i },
	}),
};

const initialLetterVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.15,
			ease: 'easeOut',
		},
	},
};

interface Props {
	text: string;
	containerVariants?: Variants | undefined;
	letterVariants?: Variants | undefined;
	className?: string;
	isHeader?: boolean;
}

export default function AnimatedText({
	text,
	containerVariants = initialContainerVariants,
	letterVariants = initialLetterVariants,
	className,
	isHeader = false,
}: Props) {
	const Comp = isHeader ? motion.h1 : motion.div;

	return (
		<Comp
			className={cn('flex overflow-hidden', className)}
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			{text.split('').map((char, index) => (
				<motion.span key={index} variants={letterVariants}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			))}
		</Comp>
	);
}
