import { cn } from '@/shared/lib/utils';
import { LoaderIcon } from 'lucide-react';

interface Props {
	className?: string;
}

export default function Loader({ className }: Props) {
	return (
		<LoaderIcon
			className={cn('h-16 w-16 text-primary/60 animate-spin', className)}
		/>
	);
}
