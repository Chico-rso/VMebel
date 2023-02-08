<template>
	<div class="mobile-menu-list">
		<div class="mobile-menu-list__wrapper">
			<ul class="mobile-menu-list__content">
				<li class="mobile-menu-list__item"
					v-for="item in 5"
                    :key="item"
				>
					<router-link to="#" class="mobile-menu-list__title">
						Диваны и кресла
					</router-link>
					<img src="@/assets/img/svg/closeIcon.svg" alt="" @click="close()">
					<ul>
						<slot></slot>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { useMobileMenuStore } from "@/store/mobileMenu";
import { storeToRefs } from "pinia";

const emit = defineEmits(['closeMobileMenuList']);
const { isOpenMobileMenuList } = storeToRefs(useMobileMenuStore());

function close() {
	isOpenMobileMenuList.value = false;
	emit('closeMobileMenuList')

}
</script>

<style lang="scss">
@import "styles/mobileMenuList";
</style>
