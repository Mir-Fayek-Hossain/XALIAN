import { getCookie } from './cookie';
import { ENV } from '$src/environment';
import jwtDecode from 'jwt-decode';

const baseURL = ENV.CORE_ENDPOINT;
interface Config {
    method?:any;
	body?: any;
	headers?: any;
}
class _CustomFetch {
	post = async (url: string, config?: Config) => {
		if (config?.headers?.Authorization) {
			// const bearerToken=await config?.headers?.Authorization?.split(" ");
			// const token = bearerToken[1];
			// if(token){
			//     const validToken=await this.checkToken();
			//     if(validToken){

			//     }
			// }
			return baseURL;
		} else {
			const response = await fetch(`${baseURL + url}`,config);
			console.log(config);

			return await response.json();
		}
	};
	get = async () => {
		return baseURL;
	};
	private checkToken = async () => {
		const userInfo = JSON.parse(getCookie(ENV.SESSION_KEY) as string);
		if (userInfo) {
			const decodeUserToken = jwtDecode(userInfo?.token);
		}
	};
}
export const CustomFetch = new _CustomFetch();
