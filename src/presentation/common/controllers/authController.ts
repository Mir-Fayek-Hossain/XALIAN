import jwtDecode from 'jwt-decode';
import { ENV } from '$src/environment';
import { getCookie, eraseCookie } from './../../../app/cookie';
export const authController = {
	userInfo: () => {
		const token = getCookie(`${ENV.SESSION_KEY}token`);
		if (token) {
			const decodejwt = jwtDecode(token as string);
			return decodejwt;
		} else {
			return false;
		}
	},logout:()=>{
		eraseCookie(`${ENV.SESSION_KEY}token`)
    }
};
