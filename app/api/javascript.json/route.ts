import generateQuestionWithId from '@/shared/utils/generateQuestionWithId';
import { questions } from './questions';
import { NextResponse, type NextRequest } from 'next/server';
import { type QuestionResponse, type Pagination } from '@/shared/types';

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const page = Number.parseInt(searchParams.get('page') || '1');
	const limit = Number.parseInt(searchParams.get('limit') || '5');
	const isPagination = searchParams.get('pagination');

	const data = generateQuestionWithId(questions);

	if (isPagination === 'true') {
		try {
			const startIndex = (page - 1) * limit;
			const endIndex = page * limit;
			const results = data.slice(startIndex, endIndex);

			const pagination: Pagination = {
				total: data.length,
				totalPages: Math.ceil(data.length / limit),
				currentPage: page,
				limit: limit,
				hasNextPage: endIndex < data.length,
				hasPrevPage: startIndex > 0,
			};

			return NextResponse.json<QuestionResponse>({
				success: true,
				pagination,
				data: results,
			});
		} catch (error) {
			console.error(
				'Не удалось сделать пагинацию. Возвращается весь массив',
				error,
			);

			return NextResponse.json({ data });
		}
	}

	return NextResponse.json({ data });
}
