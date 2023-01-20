<template>
<ul class="catalog-list">
	<li>
		<router-link to="#">
			<span>Mobiles, Computers</span>
		</router-link>
	</li>
	<CatalogItem
		v-for="catalogItem in catalogItems"
		:key="catalogItem.id"
		:title="catalogItem.title"
	/>
</ul>
</template>

<script setup>
import CatalogItem from "@/components/catalog/CatalogItem.vue";

import {ref} from "vue";

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
@import "./styles/catalogList";
</style>
