import { defineStore } from "pinia";
import {useCookies} from "vue3-cookies";

export const useProductStore = defineStore('productId',{
	state: () =>
	{
		return {
			productList: [
				{
					id: 1,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png"
				},
				{
					id: 2,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 3,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 4,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 5,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 6,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 7,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 8,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 9,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 10,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 11,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
				{
					id: 12,
					title: "Красивый товар",
					img: "@/assets/img/ProductImage-1.png",
				},
			],
			favoriteList: [],
		};
	},
	getters:
	{
		getProductList(state)
		{
			return state.productList;
		}
	},
	actions:
	{
		initProducts()
		{
			const favoriteList = useCookies().cookies.get('favoriteList');
			if (favoriteList)
			{
				this.favoriteList = JSON.parse(favoriteList);
			}
		},
		addToFavorite(id)
		{
			const product = this.productList.find((item) => item.id === id);
			this.favoriteList.push(product);
			useCookies().cookies.set('favoriteList', JSON.stringify(this.favoriteList));
		},
		removeFromFavorite(id)
		{
			this.favoriteList = this.favoriteList.filter((item) => item.id !== id);
			useCookies().cookies.set('favoriteList', JSON.stringify(this.favoriteList));
		}
	},
});
