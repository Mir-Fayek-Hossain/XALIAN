// onMount(async () => {
// 	const response = await fetch('https://fakestoreapi.com/products', {});
// 	// const response = await fetch('https://fakestoreapi.com/products/category/${params}', {});
// 	products = await response.json();
// });
export async function load({ params }) {
	// const url = `https://fakestoreapi.com/products/category/${params.category}`;
	const url ="https://api.reshop.one/v2/web/search/products?surface=women-197&page=1&take=50&sort=new";
	const res = await fetch(url);
	const products = await res.json();
	const catelog = params.category;
	return { products, catelog };
}
