import { CustomFetch } from '$src/app/fetchIntercept';
const PREFIX = '/web/search/';

export const categoryApiService = {
	category: async (payload: any) => {
		const response = await CustomFetch.post(`${PREFIX}products?surface=women-197&page=1&take=50&sort=new`, {
			body: JSON.stringify(payload),
			headers: {
				'content-type': 'application/json'
			}
		});
		return response;
	}
};
