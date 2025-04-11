import generateQuestionWithId from '@/shared/utils/generateQuestionWithId';
import { NextResponse } from 'next/server';
import { questions } from './questions';

export const dynamic = 'force-static';
export async function GET() {
	const data = generateQuestionWithId(questions);

	return NextResponse.json({ data });
}
