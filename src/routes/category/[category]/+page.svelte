<script lang="ts">
	import cmsCategory from '$src/lib/cmsCategory';
	import ProductCard from '$src/presentation/ProductCard.svelte';
	export let data;
	let products=data.response.payload.data;
	
	// let catelog = data?.catelog;
// console.log(catelog);

// 	let cmsCaty: any;
// 	for (let i = 0; i < cmsCategory.length; i++) {
// 		if (cmsCategory[i].name === catelog) {
// 			cmsCaty = cmsCategory[i];
// 			console.log(cmsCaty);
// 		}
// 	}
</script>

<div class="p-10 bg-gray-300">
	<!-- <div class="grid grid-cols-2  ">
		{#if cmsCaty?.cmsImgRight}
			<div class="grid place-content-center text-center p-5">
				<h3 class="desc font-semibold">{cmsCaty?.title}</h3>
				<p class="desc text-[11px]">{cmsCaty?.description}</p>
			</div>
			<div>
				<img class="max-h-[300px] object-cover" src={cmsCaty?.thumb} alt="" />
			</div>
		{:else}
			<div class="grid place-content-center text-center p-5">
				<h3 class="desc font-semibold">{cmsCaty?.title}</h3>
				<p class="desc text-[11px]">{cmsCaty?.description}</p>
			</div>
			<div>
				<img class="max-h-[300px] object-cover" src={cmsCaty?.thumb} alt="" />
			</div>
		{/if}
	</div> -->
	{#if products}
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-gray-300">
			{#each products as product, index}
				{#if index > 3}
					<ProductCard {product}/>
				{/if}
			{/each}
		</div>
	{:else}
		loading
	{/if}
</div>

<style>
	.card-img {
		transition: 0.5s ease-in-out;
		overflow: hidden;
	}
	.card-img:hover {
		transform: scale(1.05);
	}
</style>
