<template>
	<div class="mobile-burger-menu-list__wrapper">
		<img src="@/assets/img/svg/closeIcon.svg" alt="" @click="closeBurgerMobileMenu">
		<slot></slot>
	</div>
</template>

<script setup>
import { useMobileBurgerMenuStore } from "@/store/mobileBurgerMenu/mobileBurgerMenu";
import { storeToRefs } from "pinia";

const { isOpenMobileBurgerMenuList } = storeToRefs(useMobileBurgerMenuStore());

function closeBurgerMobileMenu() {
	isOpenMobileBurgerMenuList.value = false;
}
</script>

<style lang="scss">
@import "./styles/mobileBurgerMenuList";
</style>
