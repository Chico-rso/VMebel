<template>
	<div class="mobile-menu-list__wrapper">
		<img src="@/assets/img/svg/closeIcon.svg" alt="" @click="closeMobileMenu">
		<slot></slot>
	</div>
</template>

<script setup>
import { useMobileMenuStore } from "@/store/mobileMenu/mobileMenu";
import { storeToRefs } from "pinia";

const { isOpenMobileMenuList } = storeToRefs(useMobileMenuStore());

function closeMobileMenu() {
	isOpenMobileMenuList.value = false;
}
</script>

<style lang="scss">
@import "styles/mobileMenuList";
</style>
