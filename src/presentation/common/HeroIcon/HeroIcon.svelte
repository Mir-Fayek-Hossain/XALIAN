<script lang="ts">
	import type { HeroIconType } from './HeroIconOutLined';
	import { draw } from 'svelte/transition';

	let _class = '';

	export let icon: HeroIconType;
	export let svgAnimation: boolean = false;
	export let size = '1.5em';
	export { _class as class };

	let width = size || '1.5em';
	let height = size || '1.5em';
	let svgProps = icon['svg'];
	let paths = icon['paths'];
</script>

<svg class={_class} {...svgProps} {width} {height} xmlns="http://www.w3.org/2000/svg">
	{#if svgAnimation}
		{#each paths as pathProps}
			<path transition:draw {...pathProps} />
		{/each}
	{:else}
		{#each paths as pathProps}
			<path {...pathProps} />
		{/each}
	{/if}
</svg>

<style>
	svg {
		position: relative;
		display: inline-block;
	}
</style>
