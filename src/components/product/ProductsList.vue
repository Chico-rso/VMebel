<template>
	<ul class="products-list">
		<ProductsItem
			v-if="!favorite"
			v-for="product in productsStore.productList"
	        :key="product.id"
			:title="product.title"
			:img="product.img"
			:id="product.id"
			:favoriteIcon="favoriteIcon"
			@addFavorite="addFavorite"
		/>
		<ProductsItem
			v-if="favorite"
			v-for="product in productsStore.favoriteList"
	        :key="product.id"
			:title="product.title"
			:img="product.img"
			:id="product.id"
			:favoriteIcon="favoriteIcon"
		/>
	</ul>
</template>

<script setup>
import ProductsItem from "@/components/product/ProductsItem.vue";
import { useProductStore } from "@/store/product";

const emit = defineEmits(['addFavorite']);
const productsStore = useProductStore();
const props = defineProps({
	favorite: {
		type: Boolean,
		default: false
	},
	favoriteIcon: {
		type: Boolean,
		default: false
	}
});

function addFavorite(value, key)
{
	emit('addFavorite', value, key)
}
</script>

<style lang="scss">
@import './styles/productsList';
</style>
