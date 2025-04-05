import { type QuestionWithoutId } from '@/types';

export default function generateQuestionWithId(questions: QuestionWithoutId[]) {
	console.log(typeof crypto !== 'undefined');
	return questions.map((question) => ({
		...question,
		id:
			typeof crypto !== 'undefined'
				? crypto.randomUUID()
				: Date.now().toString(36) + Math.random().toString(36).substring(2),
	}));
}
