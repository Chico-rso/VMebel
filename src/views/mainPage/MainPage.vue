<template>
	<AddStoreRequestForm/>
	<div class="main-page__wrapper">
		<MainMenuList/>
		<ProductsList/>
		<transition name="slide-fade">
			<mobile-menu-list
				:catalogItems="catalogItems"
				v-if="isOpenMobileMenuList"
				@closeMobileMenuList="closeMobileMenuList()"
			>
				<ul class="mobile-menu-list"
				    v-for="item in 5"
				>
					<li class="mobile-menu-list__title">
						<router-link to="#">
							Диваны и кресла
						</router-link>
					</li>
					<MobileMenuItem
						v-for="catalogItem in catalogItems"
						:key="catalogItem.id"
						:title="catalogItem.title"
					/>
				</ul>
			</mobile-menu-list>
		</transition>
	</div>
</template>

<script setup>
import AddStoreRequestForm from "@/components/addStoreRequestForm/AddStoreRequestForm.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import MainMenuList from "@/components/mainMenuList/MainMenuList.vue";
import MobileMenuList from "@/components/mobileMenu/MobileMenuList.vue";
import MobileMenuItem from "@/components/mobileMenu/MobileMenuItem.vue";

import { useMobileMenuStore } from "@/store/mobileMenu/mobileMenu";
import { storeToRefs } from "pinia";

import {ref} from "vue";

let isMobileListOpen = ref(false);

const { isOpenMobileMenuList } = storeToRefs(useMobileMenuStore());

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


function closeMobileMenuList()
{
	isMobileListOpen.value = false;
}
</script>

<style lang="scss">
@import "mainPage.scss";
</style>
