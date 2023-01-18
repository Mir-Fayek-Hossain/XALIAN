import { CustomFetch } from "$src/app/fetchIntercept";
const PREFIX="/web/auth/";

export const authApiService = {
	getOtp: async (payload: any) => {
		const response = await CustomFetch.post(`${PREFIX}otp/send`, {
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
		const response = await CustomFetch.post(`${PREFIX}otp/verify`, {
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
