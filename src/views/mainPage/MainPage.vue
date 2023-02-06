<template>
	<AddStoreRequestForm/>
	<div class="main-page__wrapper">
		<MainMenuList/>
		<ProductsList/>
		<transition name="slide-fade">
			<mobile-burger-menu-list
				:catalogItems="catalogItems"
				v-if="isOpenMobileBurgerMenuList"
				@closeMobileMenuBurgerList="closeMobileMenuBurgerList()"
			>
				<ul class="mobile-burger-menu-list"
				    v-for="item in 5"
				>
					<li class="mobile-burger-menu-list__title">
						<router-link to="#">
							Диваны и кресла
						</router-link>
					</li>
					<MobileBurgerMenuItem
						v-for="catalogItem in catalogItems"
						:key="catalogItem.id"
						:title="catalogItem.title"
					/>
				</ul>
			</mobile-burger-menu-list>
		</transition>
	</div>
</template>

<script setup>
import AddStoreRequestForm from "@/components/addStoreRequestForm/AddStoreRequestForm.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import MainMenuList from "@/components/mainMenuList/MainMenuList.vue";
import MobileBurgerMenuList from "@/components/mobileBurgerMenu/MobileBurgerMenuList.vue";
import MobileBurgerMenuItem from "@/components/mobileBurgerMenu/MobileBurgerMenuItem.vue";

import { useMobileBurgerMenuStore } from "@/store/mobileBurgerMenu/mobileBurgerMenu";
import { storeToRefs } from "pinia";

import {ref} from "vue";

let isMobileListOpen = ref(false);

const { isOpenMobileBurgerMenuList } = storeToRefs(useMobileBurgerMenuStore());

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


function closeMobileMenuBurgerList()
{
	isMobileListOpen.value = false;
}
</script>

<style lang="scss">
@import "mainPage.scss";
</style>
