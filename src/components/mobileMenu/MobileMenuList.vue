<template>
	<div class="mobile-menu-list__wrapper">
		<img src="@/assets/img/svg/closeIcon.svg" alt="" @click="close()">
		<slot></slot>
	</div>
</template>

<script setup>
import { useMobileMenuStore } from "@/store/mobileMenu/mobileMenu";
import { storeToRefs } from "pinia";

const emit = defineEmits(['closeMobileMenuList']);
const { isOpenMobileMenuList } = storeToRefs(useMobileMenuStore());

function close() {
	isOpenMobileMenuList.value = false;
	emit('closeMobileMenuList')
	console.log('closeMobileMenuList');

}
</script>

<style lang="scss">
@import "styles/mobileMenuList";
</style>
