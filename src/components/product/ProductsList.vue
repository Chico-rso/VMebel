<template>
	<ul class="products-list">
		<ProductsItem
			v-for="product in productItems"
	        :key="product.id"
			:title="product.title"
			:img="product.img"
		/>
	</ul>
</template>

<script setup>
import ProductsItem from "@/components/product/ProductsItem.vue";
import { onMounted } from "vue";
import { useProductStore } from "@/store/product/product";

const productList = useProductStore()
onMounted(() =>{
	console.log("ProductsList mounted", productList);

})
</script>

<style lang="scss">
@import './styles/productsList';
</style>
