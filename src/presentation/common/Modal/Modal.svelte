<script type="ts">
	import HeroIcon from "../HeroIcon/HeroIcon.svelte";
	import { HeroIconOutLined } from "../HeroIcon/HeroIconOutLined";


	 export let modalVisibility:false;
</script>

<div class="modal_container">
	<button class="cross_btn">
		<HeroIcon icon={HeroIconOutLined.xCircle} class="black mx-2" svgAnimation={true} />
	</button>
	<slot/>
</div>
<div class="modal_overlay" on:click={()=>modalVisibility=false}/>

<style>
	.cross_btn{

	}
	.modal_container {
		z-index: 999; 
		 @apply bg-red-400  absolute lg:fixed  h-full lg:h-auto  left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2; 
	}
	.modal_overlay {
		z-index: 960;
		@apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-50;
	}
</style>
