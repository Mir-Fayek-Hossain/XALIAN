
import { categoryApiService } from "$src/data/api/category.apiService";

// });
let response
let url:string

export async function load({ params }:any) {
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


	response = await categoryApiService.category(url);
	return{
		response:response
	}
	
}
