import { defineStore } from "pinia";

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
		};
	},
	getters:{
		getProductList(state){
			return state.productList;
		}
	},
	actions: {},
});