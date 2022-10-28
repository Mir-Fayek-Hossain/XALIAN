<script lang="ts">
	import ProductCard from '$src/presentation/ProductCard.svelte';
	export let data;
	let products = data.response.payload.data;
</script>

<div class="p-10 bg-gray-300">
	
	{#if products}
		<div class="cards">
			{#each products as product, index}
				<!-- {#if index > 3} -->
					<ProductCard {product} />
				<!-- {/if} -->
			{/each}
		</div>

	{:else}
		loading
	{/if}
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		transition: 0.5s ease-in-out;
	}
	.cards {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		background-color: rgb(43, 38, 38);
	}
</style>
