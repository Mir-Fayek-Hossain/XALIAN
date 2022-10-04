<script type="ts">
	import { setCookie } from '$src/app/cookie';
	import { authApiService } from '$src/data/api/auth.apiService';
	import { ENV } from '$src/environment';
	import GetOtp from './components/GetOTP.svelte';
	import VerifyOtp from './components/VerifyOTP.svelte';
	export let modalVisibility: boolean = true;
	export let user
	let phoneNumber: string = '01874606022';
	let OTP: string;
	let result: any = null;
	let otpSent: boolean = false;
	let isloading: boolean = false;
	async function submitTel() {
		isloading = true;
		const response = await authApiService.getOtp({
			phoneNumber: phoneNumber,
			sendSms: false
		});
		isloading = false;
		result = response.payload;
		OTP = result.otp;
		otpSent = true;
	}
	async function submitOtp() {
		isloading = true;
		const response = await authApiService.verifyOtp({
			phoneNumber,
			otp: OTP
		});
		if (response.statusCode == 200) {
			setCookie(`${ENV.SESSION_KEY}token`, response?.payload?.token, 1);
			// await goto('/dashboard');
			user="a"
			modalVisibility = false;
		} else {
			otpSent = false;
		}
		result = response?.payload;
		isloading = false;
	}

</script>

<h2>XALIAN</h2>
{#if otpSent}
	<VerifyOtp bind:isloading {submitOtp} bind:OTP {phoneNumber} />
{:else}
	<GetOtp bind:isloading {submitTel} bind:phoneNumber />
{/if}

<style>
	h2 {
		padding-left: 10px;
		margin-bottom: 30px;
		border-left: 5px solid rgb(0, 0, 0);
		@apply font-bold text-xl;
	}
	.formContainer .inputBox {
		position: relative;
		width: 300px;
		height: 40px;
		margin-bottom: 20px;
	}
	.formContainer .inputBox:last-child {
		margin-bottom: 0;
	}
	.formContainer .inputBox input {
		position: absolute;
		z-index: 1;
		background-color: transparent;
		width: 100%;
		border: 1px solid rgb(0, 0, 0);
		padding: 10px;
		border-radius: 5px;
		font-size: 16px;
		color: #111;
		font-weight: 300;
	}
	.formContainer .inputBox span {
		position: absolute;
		top: 1px;
		left: 1px;
		padding: 10px;
		transition: 0.5s;
	}
	.formContainer .inputBox input:focus ~ span,
	.formContainer .inputBox input:valid ~ span {
		transform: translateX(3px) translateY(-10px);
		font-size: 13px;
		background-color: white;
		padding: 0 8px 0 8px;
		z-index: 2;
	}

	.formContainer .inputBox input[type='submit'] {
		background-color: #111;
		color: white;
		border: none;
		max-width: 120px;
		cursor: pointer;
		font-size: 15px;
		font-weight: 500;
		transition: 0.3s;
	}
	.formOptions {
		position: absolute;
		top: 80%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.formOptions p {
		margin-right: 15px;
	}
	.formOptions input {
		background: linear-gradient(90deg, rgb(190, 179, 18), rgb(255, 17, 0));
		color: white;
		border: none;
		cursor: pointer;
		font-size: 15px;
		font-weight: 500;
		box-shadow: 5px 5px 20px black;
		transition: 0.3s;
		padding: 10px;
		border-radius: 5px;
	}
	input:active {
		box-shadow: none;
	}
</style>
