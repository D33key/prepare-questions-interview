import { cn } from '@/shared/lib/utils';

type Props = { children: React.ReactNode; className?: string };

export default function Subtitle({ children, className }: Props) {
	return <h2 className={cn('', className)}>{children}</h2>;
}
