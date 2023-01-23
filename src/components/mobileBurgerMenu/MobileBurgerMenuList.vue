<template>
	<div class="catalog-list__wrapper">
		<img src="@/assets/img/svg/closeIcon.svg" alt="" @click="emit('closeMobileMenuBurgerList')">
		<ul class="catalog-list"
		    v-for="item in 5"
		>
			<li class="catalog-item__title">
				<router-link to="#">
					Диваны и кресла
				</router-link>
			</li>
			<CatalogItem
				v-for="catalogItem in catalogItems"
				:key="catalogItem.id"
				:title="catalogItem.title"
			/>
		</ul>
	</div>
</template>

<script setup>
import CatalogItem from "@/components/mobileBurgerMenu/MobileBurgerMenuItem.vue";

import {ref} from "vue";

const emit = defineEmits(["closeMobileMenuBurgerList"]);

const catalogItems = ref([
	{
		id: 1,
		title: 'Mobiles, Computers',
	},
	{
		id: 2,
		title: 'Movies, Music & Video Games',
	},
	{
		id: 3,
		title: 'Gift Cards & Mobile Recharges',
	},
	{
		id: 4,
		title: 'Car, Motorbike, Industrial',
	},
]);
</script>

<style lang="scss">
@import "./styles/mobileBurgerMenuList";
</style>
