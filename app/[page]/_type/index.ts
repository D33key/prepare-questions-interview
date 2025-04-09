import { URLS_KEYS_TYPE } from '@/shared/constants/url';

export interface PageParams {
	params: Promise<{ page: URLS_KEYS_TYPE }>;
}
