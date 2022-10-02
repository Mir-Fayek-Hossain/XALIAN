<script>
import moment from 'moment';

import jwt_decode from "jwt-decode"
	import { ENV } from '$src/environment';
	import { authApiService } from '$src/data/api/auth.apiService';
    let time=moment()
    let b=JSON.stringify(jwt_decode('eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4NDdmOWIxLWVlNzEtNDFhOS1iYWE0LTA4YWIzYjFiYTQxMiIsIm5hbWUiOiJTLlUxMjMgU2Vwb25uIiwiZmlyc3ROYW1lIjoiUy5VMTIzIiwibGFzdE5hbWUiOiJTZXBvbm4iLCJmdWxsTmFtZSI6IlMuVTEyMyBTZXBvbm4iLCJhdmF0YXIiOiJodHRwczovL2ltYWdlZGVsaXZlcnkubmV0L3VQRlpHZnRzVGt3T2ZjeV9XcGRLLVEvMGMyYjVlZTItZTkxMC00ZGQyLWEzNWItOTlkODU2Njg3OTAwL3B1YmxpYyIsInBob25lTnVtYmVyIjoiMDE5NzM3NTM4NTQiLCJlbWFpbCI6InNlcG9uLmxvb29veEBnbWFpbC5jb20iLCJ1c2VyVHlwZXMiOlsiQ3VzdG9tZXIiXSwicm9sZXMiOltdLCJpYXQiOjE2NjQzMzUzODYsImV4cCI6MTY2NDQyMTc4Nn0.cZ-WCmp0ax5ZXfq7uvRYr7zxNOJl6nIewG_GPAz14tRQRxJPJzZaMfA6WJDeKMx3TOYNVwqkEhhhWGvSNAvm0A'))
  
    async function getOtp(){
        alert(JSON.stringify(await authApiService.getOtp("kk")))
    }
</script>
<button on:click={getOtp}>get</button>
{time}
{b}
{
    ENV.CORE_ENDPOINT
}