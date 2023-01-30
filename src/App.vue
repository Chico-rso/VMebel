<template v-cloak>
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
	<main>
		<router-view />
	</main>
	<DeliveryBenefit />
	<Footer />
</template>

<script setup>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import DeliveryBenefit from "@/components/deliveryBenefit/DeliveryBenefit";
import MobileBurgerMenu from "@/components/mobileBurgerMenu/MobileBurgerMenuList";
import CatalogMenuList from "@/components/catalogMenu/CatalogMenuList";

import { RouterView } from 'vue-router'
import {ref, watch} from "vue";

let isMobileListOpen = ref(false);
let isOpenCatalogMenuList = ref(false);

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
		document.body.style.background = 'rgba(196, 196, 196, 0.38)';
	}
	else
	{
		document.body.style.overflow = "auto";
		document.body.style.background = 'white';
	}
});
</script>
<style lang="scss">
#app
{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
main{flex: 1;}
.footer{background: #EAEAEA;}
[v-cloak]{display: none;}

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
