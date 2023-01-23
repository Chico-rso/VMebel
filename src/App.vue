<template v-cloak>
	<Header
		@toggleMobileBurgerMenu="toggleMobileBurgerMenu"
		:isMobileListOpen="isMobileListOpen"
	/>
	<MobileBurgerMenu
		v-if="isMobileListOpen"
		@closeMobileMenuBurgerList="closeMobileMenuBurgerList()"
	/>
	<main>
		<router-view />
	</main>
	<DeliveryBenefit />
	<Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import DeliveryBenefit from "@/components/deliveryBenefit/DeliveryBenefit";
import MobileBurgerMenu from "@/components/mobileBurgerMenu/MobileBurgerMenuList";

import {ref} from "vue";

let isMobileListOpen = ref(false);

function closeMobileMenuBurgerList()
{
	isMobileListOpen.value = false;
}

function toggleMobileBurgerMenu()
{
	isMobileListOpen.value = !isMobileListOpen.value;
}
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
</style>
