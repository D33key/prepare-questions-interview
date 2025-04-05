import { useCardActions } from '@/utils/hooks/card/useCardActions';
import { motion } from 'framer-motion';

export default function CardResetButton() {
	const { resetCards } = useCardActions();
	return (
		<div className='flex justify-center items-center w-full h-[200px]'>
			<motion.button
				onClick={resetCards}
				className='px-6 py-3 bg-indigo-600 text-white border-none rounded-lg text-base font-medium cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:bg-indigo-700'
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				Перемешать вопросы и начать заново
			</motion.button>
		</div>
	);
}
