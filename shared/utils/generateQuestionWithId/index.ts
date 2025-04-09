import { type QuestionWithoutId } from '@/shared/types';

export default function generateQuestionWithId(questions: QuestionWithoutId[]) {
	return questions.map((question) => ({
		...question,
		id:
			typeof crypto !== 'undefined'
				? crypto.randomUUID()
				: Date.now().toString(36) + Math.random().toString(36).substring(2),
	}));
}
