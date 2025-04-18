import { useSuspenseQuery } from '@tanstack/react-query';
import { type QuestionResponse } from '../types';
import {
	type KeysQueryOptionsObject,
	queryOptionsObject,
} from '@/app/api/queryOptionsObject';

export default function useQuery<T extends QuestionResponse>(
	queryOptions: KeysQueryOptionsObject,
) {
	const { data, ...other } = useSuspenseQuery<
		T,
		Error,
		T,
		('javascript' | 'react')[]
	>(queryOptionsObject[queryOptions]);

	return {
		...other,
		success: data.success,
		data: data.data,
		pagination: data.pagination,
	};
}
