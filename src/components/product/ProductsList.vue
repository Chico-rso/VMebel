<template>
	<div class="products-list">
		<ProductsItem
			v-for="product in productItems"
	        :key="product.id"
			:title="product.title"
			:img="product.img"
		/>
	</div>
</template>

<script setup>
import { ref } from "vue";
import ProductsItem from "@/components/product/ProductsItem.vue";

const productItems = ref([
	{
		id: 1,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 2,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 3,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 4,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 5,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 6,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 7,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 8,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 9,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 10,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 11,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	},
	{
		id: 12,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/250',
	}
])
</script>

<style lang="scss">
@import './styles/productsList';
</style>
