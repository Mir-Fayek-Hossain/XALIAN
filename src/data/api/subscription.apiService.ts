import { CustomFetch } from '$src/app/fetchIntercept';
const PREFIX = '/web/subscriptions/';

export const subscriptionApiService = {
	subscribe: async (payload: any) => {
		const response = await CustomFetch.post(`${PREFIX}email/`, {
			body: JSON.stringify(payload),
			headers: {
				'content-type': 'application/json'
			}
		});
		return response;
	}
};
