<template>
	<AddStoreRequestForm/>
	<div class="main-page__wrapper">
		<MainMenuList/>
		<ProductsList/>
	</div>
</template>

<script setup>
import AddStoreRequestForm from "@/components/addStoreRequestForm/AddStoreRequestForm.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import MainMenuList from "@/components/mainMenuList/MainMenuList.vue";

</script>

<style lang="scss">
@import "mainPage.scss";
</style>
