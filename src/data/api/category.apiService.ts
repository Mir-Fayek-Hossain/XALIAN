import { CustomFetch } from '$src/app/fetchIntercept';
const PREFIX = '/web/search/';

export const categoryApiService = {
	category: async (url: any) => {
		const response = await CustomFetch.get(`${PREFIX}${url}`, {
			
			headers: {
				'content-type': 'application/json'
			}
		});
		return response;
	}
};
