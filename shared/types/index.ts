export interface Question {
	id: string;
	title: string;
	answer: string;
}

export interface Pagination {
	total: number;
	totalPages: number;
	currentPage: number;
	limit: number;
	hasNextPage: boolean;
	hasPrevPage: boolean;
}

export interface QuestionResponse {
	success: boolean;
	pagination: Pagination;
	data: Question[];
}

export type QuestionWithoutId = Omit<Question, 'id'>;
