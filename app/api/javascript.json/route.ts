import generateQuestionWithId from '@/shared/utils/generateQuestionWithId';
import { questions } from './questions';

export async function GET() {
	return Response.json(generateQuestionWithId(questions));
}
