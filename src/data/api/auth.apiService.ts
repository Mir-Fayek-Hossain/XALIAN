import { CustomFetch } from './../../app/fetchIntercept';
export const authApiService = {
	getOtp: async (payload: any) => {
		const response = await CustomFetch.post('/web/auth/otp/send', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				// Authorization: '',
				// "Authorization": `Bearer ${token}`,
				'content-type': 'application/json'
			}
		});
		return response;
	},
	verifyOtp: async (payload: any) => {
		const response = await CustomFetch.post('/web/auth/otp/verify', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				// Authorization: '',
				// "Authorization": `Bearer ${token}`,
				'content-type': 'application/json'
			}
		});
		return response;
	}
	//     ,verifyOtp:async(val,token)=>{
	// const response=await CustomFetch.post('/api',{
	//     body:JSON.stringify(val),
	//     headers: {
	//         "Authorization": `Bearer ${token}`,
	//         "content-type": "application/json",
	//     }
	// })
};
