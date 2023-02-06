<template>
	<Header
		:isOpenCatalogMenuList="isOpenCatalogMenuList"
		@openCatalogMenuList="openCatalogMenuList()"
	/>
	<CatalogMenuList
		:isOpenCatalogMenuList="isOpenCatalogMenuList"
	/>
	<div class="base-layout">
		<div class="container">
			<router-link
				v-if="$route.name !== 'MainPage'"
				class="base-layout__back"
				to="/"
			>
				<img src="@/assets/img/svg/arrowBack.svg" alt="">
				<p>Назад</p>
			</router-link>
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
import CatalogMenuList from "@/components/catalogMenu/CatalogMenuList";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

import {RouterView} from "vue-router";
import {ref, watch, computed} from "vue";

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

function openCatalogMenuList()
{
	isOpenCatalogMenuList.value = !isOpenCatalogMenuList.value;
}
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
