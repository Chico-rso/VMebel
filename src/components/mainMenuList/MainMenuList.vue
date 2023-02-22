<template>
	<div class="main-menu-list">
		<ul
		    v-for="item in 7"
		    :key="item"
		>
			<li
				class="main-menu-list__title"
			>
				<router-link to="/category/1">
					Диваны и кресла
				</router-link>
			</li>
			<MainMenuListItem
				v-for="item in menuItems"
				:key="item.id"
				:title="item.title"
			/>

		</ul>
	</div>
</template>

<script setup>
import MainMenuListItem from "@/components/mainMenuList/MainMenuListItem.vue";
import {ref} from "vue";

const menuItems = ref(
[
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
	]
)
</script>

<style lang="scss">
@import "./styles/mainMenuList";
</style>
