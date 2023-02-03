<template>
	<Header
		@toggleMobileBurgerMenu="toggleMobileBurgerMenu"
		:isMobileListOpen="isMobileListOpen"
		:isOpenCatalogMenuList="isOpenCatalogMenuList"
		@openCatalogMenuList="openCatalogMenuList()"
	/>
	<transition name="slide-fade">
		<MobileBurgerMenu
			v-if="isMobileListOpen"
			@closeMobileMenuBurgerList="closeMobileMenuBurgerList()"
		/>
	</transition>
	<CatalogMenuList
		:isOpenCatalogMenuList="isOpenCatalogMenuList"
	/>
	<div class="base-layout">
		<div class="container">
			<Breadcrumbs
				v-if="$route.name !== 'MainPage'"
				:crumbs="crumbs"
			/>
			<router-view/>
		</div>
	</div>
	<DeliveryBenefit/>
	<Footer/>
</template>

<script setup>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import DeliveryBenefit from "@/components/deliveryBenefit/DeliveryBenefit";
import MobileBurgerMenu from "@/components/mobileBurgerMenu/MobileBurgerMenuList";
import CatalogMenuList from "@/components/catalogMenu/CatalogMenuList";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

import {RouterView} from "vue-router";
import {ref, watch, computed} from "vue";

let isMobileListOpen = ref(false);
let isOpenCatalogMenuList = ref(false);

const crumbs = computed(() =>
{
	return [
		{
			text: "VMebel",
			path: "/"
		},
		{
			text: "Диваны и кресла",
			path: "/category/1"
		},
		{
			text: "Mobiles, Computers",
			path: "/product"
		},
	];
});

function closeMobileMenuBurgerList()
{
	isMobileListOpen.value = false;
}

function toggleMobileBurgerMenu()
{
	isMobileListOpen.value = !isMobileListOpen.value;
}

function openCatalogMenuList()
{
	isOpenCatalogMenuList.value = !isOpenCatalogMenuList.value;
}

watch(isMobileListOpen, (val) =>
{
	if (val)
	{
		document.body.style.overflow = "hidden";
		document.body.style.background = "rgba(196, 196, 196, 0.38)";
	}
	else
	{
		document.body.style.overflow = "auto";
		document.body.style.background = "white";
	}
});
</script>

<style lang="scss">
.footer
{background: #EAEAEA;}

[v-cloak]
{display: none;}

.slide-fade-enter-active
{
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active
{
	transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to
{
	transform: translateX(20px);
	opacity: 0;
}
</style>
