import { ENV } from "$src/environment"
import config from "vite.config";

const baseURL=ENV.CORE_ENDPOINT
interface Config {
    body?: any;
    headers?: any;
}
class _CustomFetch{
    post=async(url:string,config?:Config)=>{
        const bearerToken=await config?.headers?.Authorization?.split(" ");
        const token = bearerToken[1];
        if(token){
            const validToken=
        }
        return baseURL
    }
    get=async()=>{
        return baseURL
    }
    private checkToken=async()=>{
        const userInfo=JSON.parse(getCookie("xalian_"))

    }

}
export const CustomFetch =new _CustomFetch()