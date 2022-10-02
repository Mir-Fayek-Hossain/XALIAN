import { ENV } from "$src/environment"

const baseURL=ENV.CORE_ENDPOINT
interface Config {
    body?: any;
    headers?: any;
}
class _CustomFetch{
    post=async(as:string,d:Config)=>{
        return baseURL
    }
    get=async()=>{
        return baseURL
    }

}
export const CustomFetch =new _CustomFetch()