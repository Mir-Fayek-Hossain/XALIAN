<script type="ts">
	import { isAuthenticated } from '$src/presentation/store/baseStore';
	import HeroIcon from '../HeroIcon/HeroIcon.svelte';
	import { HeroIconOutLined } from '../HeroIcon/HeroIconOutLined';

	export let onClose:any;
	function modalCloseHandle(){
		onClose()
		isAuthenticated.update(n => false);
	}
</script>

<div class="modal_container">
	<button class="cross_btn" on:click={modalCloseHandle}>
		<HeroIcon icon={HeroIconOutLined.x} class="" svgAnimation={false} />
	</button>
	<div class="modal_content">
		<slot />
	</div>
</div>
<div class="modal_overlay" on:click={modalCloseHandle} />

<style>
	.cross_btn {
		float: right;
		@apply bg-gray-300 p-1  rounded-full m-2 text-gray-600
	}
	.modal_content {
		padding: 40px 30px;
	}
	.modal_container {
		background: white;
		border-radius: 20px;
		z-index: 999;
		@apply fixed  h-auto  left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2;
	}
	.modal_overlay {
		z-index: 960;
		@apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50;
	}
</style>
