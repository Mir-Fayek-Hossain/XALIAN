import { CustomFetch } from '$src/app/fetchIntercept';
const PREFIX = '/web/surface-catalogs';

export const surfaceCatalogApiService = {
	catalogs: async () => {
		const response = await CustomFetch.get(`${PREFIX}`, {
			
			headers: {
				'content-type': 'application/json'
			}
		});
		return response;
	}
};
