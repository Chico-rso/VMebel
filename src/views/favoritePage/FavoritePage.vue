<template>
	<div class="favorite">
		<h2>
			Избранные товары
		</h2>
		<div class="favorite__products">
			<ProductsList
				:favorite="favorite"
			/>
		</div>
	</div>
</template>

<script setup>
import ProductsList from "@/components/product/ProductsList.vue";
import {ref} from "vue";

let favorite = ref(true);
</script>

<style lang="scss">
@import './favoritePage';
</style>
