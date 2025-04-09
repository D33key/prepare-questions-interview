export const URLS = {
	javascript: { url: '/javascript', prefix: ['/random', '/all'] },
	react: { url: '/react', prefix: ['/random', '/all'] },
} as const;

export const URLS_KEYS = Object.keys(URLS);

export type URLS_KEYS_TYPE = keyof typeof URLS;
