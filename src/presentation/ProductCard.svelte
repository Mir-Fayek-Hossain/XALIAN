<script type="ts">
	import HeroIcon from "./common/HeroIcon/HeroIcon.svelte";
	import { HeroIconOutLined } from "./common/HeroIcon/HeroIconOutLined";


    
    export let product:any
    console.log(product);
    
</script>
<!-- <div>
    <a href={`/${product.id}`} class="bg-white desc card-img ">
        <img class="  max-h-96 w-full object-cover" src={product?.images[0]} alt="" />
        <p class="eclipse">{product?.name}</p>
        <p>$ {product?.new_price}</p>
    </a>
    <button  class=" bg-red-300">Add to cart</button>
</div> -->
<div class="product-card">
    <div
        class="product-image"
        style={`background-image: url(${product?.images[0]})`}
    />
    <div class="product-body">
        <div class="options">
            <div class="option">
                <HeroIcon icon={HeroIconOutLined.heart} class="text-black" svgAnimation={false} />
            </div>
            <div class="option">
                <HeroIcon icon={HeroIconOutLined.eye} class="text-black" svgAnimation={false} />
            </div>
        </div>
        <button class="product-card-button desc"
            ><HeroIcon icon={HeroIconOutLined.shoppingBag} class="text-black" svgAnimation={false} /> Add
            to bag</button
        >
        <div class="product-details">
            <p class="desc title">{product?.display_name}</p>
            <div class="product-price-tag">
                <div class="dot" />
                <p class="desc">${product?.new_price}</p>
            </div>
        </div>
    </div>
</div>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		transition: 0.5s ease-in-out;
	}


	.product-card {
		border: 1px solid black;
		position: relative;
		display: grid;
		place-content: center;
		height: 33vw;
		width: 30vw;
		transition-property: width;
		transition-duration: 0s;
	}

	.product-image {
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		width: 100%;
		height: 100%;
		position: absolute;
	}

	.product-card:hover .product-image {
		filter: blur(2px);
		filter: brightness(80%);
	}

	.product-body {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		position: absolute;
	}

	.product-details {
		position: absolute;
		bottom: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15px;
		width: 100%;
	}

	.product-price-tag {
		color: white;
		display: flex;
		align-items: center;
		background-color: tomato;
		padding: 2px 5px;
		border-radius: 10px 0 0 10px;
	}

	.product-price-tag .dot {
		height: 5px;
		width: 5px;
		margin: 0 5px;
		border-radius: 50%;
		background-color: white;
	}

	.product-card-button {
		background-color: transparent;
		border: 1px solid black;
		border-radius: 4px;
		padding: 5px;
		cursor: pointer;
		opacity: 0;
		background-color: white;
	}

	/* .product-card-button:hover {
    background-color: transparent;
   background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 0, 0, 0)); 
  
  
} */

	.product-card:hover .product-card-button {
		opacity: 1;
	}

	.product-card .options {
		position: absolute;
		top: 10px;
		left: 10px;
		opacity: 0;
		display: flex;
	}

	.product-card:hover .options {
		opacity: 1;
	}

	.product-card .options .option {
		margin-right: 5px;
		background-color: white;
		border-radius: 50%;
		padding: 3px;
		font-size: 10px;
		display: grid;
		place-content: center;
		width: 20px;
		height: 20px;
		box-shadow: 3px -1px 35px -4px rgba(0, 0, 0, 1);
		-webkit-box-shadow: 3px -1px 35px -4px rgba(0, 0, 0, 1);
		-moz-box-shadow: 3px -1px 35px -4px rgba(0, 0, 0, 1);
		cursor: pointer;
	}

	.product-card .options .option:hover {
		color: gray;
	}

	@media only screen and (max-width: 600px) {
		.product-card {
			width: 50vw;
			height: 50vw;
		}
	}

	@media only screen and (max-width: 275px) {
		.product-card {
			width: 100vw;
			height: 300px;
		}
	}
</style>
