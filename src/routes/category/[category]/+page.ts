// onMount(async () => {
// 	const response = await fetch('https://fakestoreapi.com/products', {});
// 	// const response = await fetch('https://fakestoreapi.com/products/category/${params}', {});
// 	products = await response.json();

import { categoryApiService } from "$src/data/api/category.apiService";

// });
let response
let url

export async function load({ params }) {
if (params.category=="kurtis") {
	url="products?surface=men-914-kurti-199&page=1&take=50&sort=new"
} else if(params.category=="frock_dress") {
	url="products?surface=women-197-western-wear-74a-dresses-447&page=1&take=50&sort=new"
} else if(params.category=="men_t-shirt") {
	url="products?surface=men-914-topwear-3a3-drop-shoulder-t-shirts-934&page=1&take=50&sort=new"
} else if(params.category=="western_clothings") {
	url="products?surface=women-197-western-wear-74a&page=1&take=50&sort=new"
} else if(params.category=="women's clothing") {
	url="products?surface=women-197&page=1&take=50&sort=new"
}

		//kurti https://api.reshop.one/v2/web/search/products?surface=men-914-kurti-199&page=1&take=50&sort=new
		//frock dress shirt https://api.reshop.one/v2/web/search/products?surface=women-197-western-wear-74a-dresses-447&page=1&take=50&sort=new
		//men shirt https://api.reshop.one/v2/web/search/products?surface=men-914-topwear-3a3-casual-shirts-454&page=1&take=50&sort=new
		//salmon er moto genji https://api.reshop.one/v2/web/search/products?surface=men-914-topwear-3a3-drop-shoulder-t-shirts-934&page=1&take=50&sort=new
		//western https://api.reshop.one/v2/web/search/products?surface=women-197-western-wear-74a&page=1&take=50&sort=new


	response = await categoryApiService.category(url);
	return{
		response:response
	}
	
}


// https://api.reshop.one/v2/web/search/products?surface=women-197&page=1&take=50&sort=new
//https://api.reshop.one/v2/web/search/products?surface=women-197-ethnic-and-fusion-dresses-693-kurtis-766&page=1&take=50&sort=new