import generateQuestionWithId from '@/utils/generateQuestionWithId';
import { questions } from './questions';

export async function GET() {
	return Response.json(generateQuestionWithId(questions));
}
