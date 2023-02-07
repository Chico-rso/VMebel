<template>
	<div class="category-filter">
		<div class="category-filter__background"></div>
		<div class="category-filter__content">
			<ul class="category__filter-subcategories">
				<li
					v-for="subcategory in subcategories"
					:key="subcategory.id"
					class="category__filter-subcategories-item">
					<router-link :to="subcategory.url">
						{{ subcategory.title }}
					</router-link>
				></li>
			</ul>
			<ul class="category-filter__accordion">
				<li>
					<accordion title="Цена, ₽">
					</accordion>
				</li>
				<li>
					<accordion title="Бренд">
					</accordion>
				</li>
				<li>
					<accordion title="Коллекция">
					</accordion>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import {ref} from "vue";
import Accordion from "@/components/accordion/Accordion.vue";

const subcategories = ref([
	{id:2, title:"Mobiles, Computers", url:"/", },
	{id:3, title:"Movies, Music & Video Games", url:"/", },
	{id:4, title:"Gift Cards & Mobile Recharges", url:"/", },
	{id:5, title:"Car, Motorbike, Industrial", url:"/", },
])
</script>

<style lang="scss">
@import "styles/categoryFilter";
</style>
