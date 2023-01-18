<script>
	import { page } from '$app/stores';
	import DeskTopHeader from '$src/presentation/layouts/DeskTopHeader.svelte';
	import Footer from '$src/presentation/layouts/Footer.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	let d;
	onMount(() => {
		d = window.innerWidth;
		console.log(d);
	});
</script>

<!-- {JSON.stringify($session)} -->
<!-- {JSON.stringify($page.routeId)} -->
<div class="header" class:header-bg-clr={$page.routeId == ''} class:bg-white={$page.routeId != ''}>
	<DeskTopHeader />
</div>
<div class="main-content">
	{#if $page.routeId == ''}
		<slot />
	{:else}
		<div class="mt-20  min-h-[50vh]">
			<slot />
		</div>
	{/if}
</div>
<Footer />

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
	.header {
		@apply w-full fixed top-0 z-50;
	}
	.header-bg-clr {
		background-image: linear-gradient(
			black,
			rgba(0, 0, 0, 0.555),
			rgba(14, 14, 14, 0.322),
			transparent
		);
		@apply pb-3;
	}
	.main-content {
		@apply relative;
	}
</style>
