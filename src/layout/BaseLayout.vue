<template>
	<Header
		:isOpenCatalogMenuList="isOpenCatalogMenuList"
		@openCatalogMenuList="openCatalogMenuList()"
		:stickyHeader="stickyHeader"
		ref="header"
	/>
	<div v-if="stickyHeader" class="header__sticky" style="height: 94px;"></div>
	<CatalogMenuList
		:isOpenCatalogMenuList="isOpenCatalogMenuList"
	/>
	<transition name="slide-fade">
		<mobile-menu-list
			:catalogItems="catalogItems"
			@click="closeMobileMenuList()"
			v-if="isOpenMobileMenuList"
		>
			<MobileMenuItem
				v-for="catalogItem in catalogItems"
				:key="catalogItem.id"
				:title="catalogItem.title"
			/>
		</mobile-menu-list>
	</transition>
	<div class="base-layout">
		<div class="container">
			<router-link
				v-if="$route.name !== 'MainPage' && $route.name !== 'AboutPage'"
				class="base-layout__back"
				to="/"
			>
				<img src="@/assets/img/svg/arrowBack.svg" alt="">
				<p>Назад</p>
			</router-link>
			<Breadcrumbs
				v-if="$route.name !== 'MainPage'  && $route.name !== 'ContactsPage'"
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
import CatalogMenuList from "@/components/catalogMenu/CatalogMenuList";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import MobileMenuItem from "@/components/mobileMenu/MobileMenuItem";
import MobileMenuList from "@/components/mobileMenu/MobileMenuList";

import { useMobileMenuStore } from "@/store/mobileMenu";
import { storeToRefs } from "pinia";
import {RouterView} from "vue-router";
import {ref, computed, watch, onMounted, onUnmounted} from "vue";

const { isOpenMobileMenuList } = storeToRefs(useMobileMenuStore());
const header = ref(null);

let isOpenCatalogMenuList = ref(false);
let stickyHeader = ref(false);

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

function openCatalogMenuList()
{
	isOpenCatalogMenuList.value = !isOpenCatalogMenuList.value;
}
function closeMobileMenuList()
{
	isOpenMobileMenuList.value = false;
}

watch(isOpenMobileMenuList, (val) =>
{
	if (val)
	{
		document.body.style.overflow = "hidden";
	}
	else
	{
		document.body.style.overflow = "auto";
	}
});
function updateStickyHeader()
{
	let scroll = window.pageYOffset;
	console.log(scroll);
	if(scroll >= 90)
	{
		stickyHeader.value = true;
	}
	else
	{
		stickyHeader.value = false;
	}
}
onMounted(() =>
{
	if(window.innerWidth <= 1024)
	{
		window.addEventListener("scroll", updateStickyHeader);
	}
});
onUnmounted(() =>
{
	window.removeEventListener("scroll", updateStickyHeader);
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
.base-layout__back
{
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	cursor: pointer;
	img{margin-right: 7px;}
	p
	{
		font-weight: 500;
		font-size: 8px;
		line-height: 9px;
		color: $grey;
	}
}
@media (min-width: 1440px)
{
	.base-layout__back{display: none;}
}
</style>
