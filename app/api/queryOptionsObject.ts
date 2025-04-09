import generateQueryOptions from './_utils/generateQueryOptions';

type ApiRequest = (
	isPagination: boolean,
) => ReturnType<typeof generateQueryOptions>;

export const queryOptionsObject: Record<string, ApiRequest> = {
	javascript: (isPagination) =>
		generateQueryOptions('javascript', isPagination),
	react: (isPagination) => generateQueryOptions('react', isPagination),
};

export type KeysQueryOptionsObject = keyof typeof queryOptionsObject;
