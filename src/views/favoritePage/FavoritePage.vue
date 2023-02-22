<template>
	<div class="favorite">
		<h2>
			Избранные товары
		</h2>
		<div class="favorite__products">
			<ProductsList
				:favorite="favorite"
				:favoriteIcon="favoriteIcon"
				@addFavorite="addFavorite"
			/>
		</div>
	</div>
</template>

<script setup>
import ProductsList from "@/components/product/ProductsList.vue";
import {useProductStore} from "@/store/product";
import {ref} from "vue";

let favorite = ref(true);
let favoriteIcon = ref(true);
const productsStore = useProductStore();

function addFavorite(value, key)
{
	if(value)
	{
		productsStore.addToFavorite(key);
	}
	else
	{
		productsStore.removeFromFavorite(key);
	}
}
</script>

<style lang="scss">
@import './favoritePage';
</style>
