<template>
	<div class="main-menu-list">
		<ul
		    v-for="item in 5"
		    :key="item"
		>
			<router-link
				class="main-menu-list__title"
				to="#"
			>
				Диваны и кресла
			</router-link>
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
.main-menu-list
{
	display: flex;
	flex-direction: column;
	border: 1px solid #ABABAB;
	border-radius: 10px;
	ul
	{
		list-style: none;
		margin: 0;
		padding: 0 18px 26px 18px;
		&:first-child{padding-top: 19px;}
		&:not(:last-child)
		{
			margin-bottom: 17px;
			border-bottom: 1px solid #ABABAB;
		}
		a:hover{color: $btn-color;}
	}
}
.main-menu-list__title
{
	display: block;
	margin-bottom: 10px;
	font-weight: $bold;
	font-size: 16px;
	line-height: 19px;
	color: $black;
}
</style>
