import { CustomFetch } from '$src/app/fetchIntercept';
const PREFIX = '/web/search/';

export const categoryApiService = {
	category: async () => {
		const response = await CustomFetch.get(`${PREFIX}products?surface=women-197&page=1&take=50&sort=new`, {
			
			headers: {
				'content-type': 'application/json'
			}
		});
		return response;
	}
};
