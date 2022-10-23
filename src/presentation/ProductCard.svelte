<script type="ts">
    
    export let product:any
</script>
<div>
    <a href={`/${product.id}`} class="bg-white desc card-img ">
        <img class="  max-h-96 w-full object-cover" src={product?.images[0]} alt="" />
        <p class="eclipse">{product?.name}</p>
        <p>$ {product?.new_price}</p>
    </a>
    <button  class=" bg-red-300">Add to cart</button>
</div>
