<template>
	<div class="category">
		<div class="category__description">
			<h2>Диваны и кресла</h2>
			<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
				enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
		</div>
		<button class="category__filter-button"
		        @click="toggleCategoryFilter"
		>
			<img src="@/assets/img/svg/filter-icon.svg" alt="">
			<p>Фильтр</p>
		</button>
		<div class="category__products">
			<transition name="slide-fade">
				<CategoryFilter
					v-if="openCategoryFilter"
					:openCategoryFilter="openCategoryFilter"
					@closeCategoryFilter="toggleCategoryFilter"
				/>
			</transition>
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
import CategoryFilter from "@/views/categoryPage/components/categoryFilter/CategoryFilter.vue";
import { useProductStore } from "@/store/product";

import {ref, onMounted} from "vue";

let openCategoryFilter = ref(false);
let favorite = ref(false);
let favoriteIcon = ref(true);
const productsStore = useProductStore();

function toggleCategoryFilter()
{
	openCategoryFilter.value = !openCategoryFilter.value;
	if(openCategoryFilter.value && window.innerWidth < 1440)
	{
		document.body.style.overflow = "hidden";
	}
	else
	{
		document.body.style.overflow = "auto";
	}
}

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

onMounted(() => {
	if(window.innerWidth >= 1440)
	{
		openCategoryFilter.value = true;
		document.body.style.overflow = "auto";
	}
	else
	{
		openCategoryFilter.value = false;
	}
});
</script>

<style lang="scss">
@import "categoryPage";
</style>
