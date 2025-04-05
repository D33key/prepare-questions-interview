import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils';

const divVariants = cva('w-full h-full', {
	variants: {
		variant: {
			cardWrapper:
				'relative transform-3d cursor-pointer rounded-2xl shadow-lg select-none bg-gray-50 flex flex-col justify-center items-center p-5 transition-all duration-600 ease active:cursor-grabbing',
			cardsContainer: 'relative w-full max-w-[500px] h-[400px] mx-auto',
			cardsList:
				'flex flex-col justify-center items-center p-5 w-full h-(--calc-height) gap-5',
			frontCard:
				'absolute backface-hidden flex flex-col justify-center items-center rounded-2xl p-5 bg-gray-50 text-gray-800',
			backCard:
				'absolute backface-hidden flex flex-col justify-center items-center rounded-2xl p-5 bg-gray-600 text-white rotate-y-180 overflow-y-auto',
			scrollY: 'overflow-y-auto',
		},
	},
});

export default function Div({
	className,
	variant,
	noVariantsStyle,
	...props
}: React.ComponentProps<'div'> &
	VariantProps<typeof divVariants> & {
		asChild?: boolean;
		noVariantsStyle?: boolean;
	}) {
	const isVariantsStyle = noVariantsStyle
		? className
		: divVariants({ variant, className });

	return <div className={cn(isVariantsStyle)} {...props} />;
}
