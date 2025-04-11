import { type Question } from '@/shared/types';
import { useMemo, useState } from 'react';
//@ts-expect-error There is no ts
import { useSearch as useSearchLib, search } from 'use-search-react';

interface UseSearch {
	data: Question[];
	searchOptions: {
		fields: string[];
		match: 'contains' | 'exact' | 'fuzzy';
	};
	debounce: number;
}

export default function useSearch<T>(
	data: T,
	searchOptions: UseSearch['searchOptions'],
	debounce = 300,
) {
	const [query, setQuery] = useState('');
	const memoData = useMemo(() => data, [data]);
	const memoFeatures = useMemo(() => [search(searchOptions)], []);
	const result = useSearchLib(memoData, query, debounce, ...memoFeatures);
	return { result, setQuery } as {
		result: T;
		setQuery: React.Dispatch<React.SetStateAction<string>>;
	};
}
