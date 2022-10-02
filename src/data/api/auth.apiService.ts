import { CustomFetch } from './../../app/fetchIntercept';
export const authApiService = {
	getOtp: async (val:string, token:string) => {
		const response = await CustomFetch.post('/api', {
            body: JSON.stringify(val),
            headers: { 
                "Authorization": `Bearer ${token}`,
                "content-type": "application/json"
            }
		})
        console.log("aaaa");
        
        return response
	}
//     ,verifyOtp:async(val,token)=>{
// const response=await CustomFetch.post('/api',{
//     body:JSON.stringify(val),
//     headers: { 
//         "Authorization": `Bearer ${token}`,
//         "content-type": "application/json",
//     }
// })
    }
