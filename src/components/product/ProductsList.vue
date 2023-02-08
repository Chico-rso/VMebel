<template>
	<ul class="products-list">
		<ProductsItem
			v-for="product in productsStore.productList"
	        :key="product.id"
			:title="product.title"
			:img="product.img"
		/>
	</ul>
</template>

<script setup>
import ProductsItem from "@/components/product/ProductsItem.vue";
import { useProductStore } from "@/store/product";

const productsStore = useProductStore();
</script>

<style lang="scss">
@import './styles/productsList';
</style>
