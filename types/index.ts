export interface List {
	title?: string;
	items: string[];
	type?: 'dots' | 'numbers';
	code?: Code;
}

export type Code =
	| {
			title?: string;
			code: string;
	  }
	| string;

export interface Question {
	id: string;
	title: string;
	answer: string;
	lists?: List[];
	code?: Code;
}
export type QuestionWithoutId = Omit<Question, 'id'>;
