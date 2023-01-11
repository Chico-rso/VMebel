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
		img: 'https://via.placeholder.com/150',
	},
	{
		id: 2,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/150',
	},
	{
		id: 3,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/150',
	},
	{
		id: 4,
		title: 'Красивый товар',
		img: 'https://via.placeholder.com/150',
	}
])
</script>

<style lang="scss">
.products-list
{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 4px;
	margin-bottom: 29px;
}
@media (min-width: 768px)
{
	.products-list
	{
		gap: 20px;
	}
}
</style>
