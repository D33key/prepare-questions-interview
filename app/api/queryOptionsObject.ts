import generateQueryOptions from './_utils/generateQueryOptions';

type ApiRequest = ReturnType<typeof generateQueryOptions>;

export const queryOptionsObject: Record<string, ApiRequest> = {
	javascript: generateQueryOptions('javascript'),
	react: generateQueryOptions('react'),
};

export type KeysQueryOptionsObject = keyof typeof queryOptionsObject;
