<template>
	<AddStoreRequestForm/>
	<div class="main-page__wrapper">
		<MainMenuList/>
		<ProductsList
			:favorite="favorite"
		/>
	</div>
</template>

<script setup>
import AddStoreRequestForm from "@/components/addStoreRequestForm/AddStoreRequestForm.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import MainMenuList from "@/components/mainMenuList/MainMenuList.vue";
import {ref} from "vue";

let favorite = ref(false);
</script>

<style lang="scss">
@import "mainPage.scss";
</style>
