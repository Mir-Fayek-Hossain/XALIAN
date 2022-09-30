<script type="ts">
	// your script goes here
	export let submitOtp: any;
	export let phoneNumber: string = '';
	export let isloading:boolean=false
	export let OTP: string = '';
</script>

<div class=" formContainer">
	<form on:submit|preventDefault={submitOtp}>
		<div class="inputBox">
			<input type="tel" required bind:value={OTP} />
			<span>OTP code</span>
		</div>
		<p>OTP has been sent to ({phoneNumber}) your mobile number Please verify!</p>

		<div class="inputBox flex justify-center">
			<input type="submit" value={isloading?"loading...":"Submit"}  />
		</div>
	</form>
</div>

<style>
	.formContainer {
		width: 300px;
	}
    .formContainer form p{
        font-size: 14px;
	}
	.formContainer h2 {
		padding-left: 10px;
		margin-bottom: 30px;
		border-left: 5px solid rgb(0, 0, 0);
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
