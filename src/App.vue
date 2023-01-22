<template v-cloak>
	<Header
		@toggleCatalogMenu="toggleCatalogMenu"
		:isCatalogListOpen="isCatalogListOpen"
	/>
	<CatalogList
		v-if="isCatalogListOpen"
		@closeCatalogList="closeCatalogList()"
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
import CatalogList from "@/components/catalog/CatalogList.vue";

import {ref} from "vue";

let isCatalogListOpen = ref(false);

function closeCatalogList(value)
{
	console.log("closeCatalogList");
	isCatalogListOpen.value = false;
}

function toggleCatalogMenu()
{
	console.log("toggleCatalogMenu");

	isCatalogListOpen.value = !isCatalogListOpen.value;
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
