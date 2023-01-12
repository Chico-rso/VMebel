<template>
	<AddStoreRequestForm />
	<div class="container">
		<div class="main-page__wrapper">
			<MainMenuList />
			<ProductsList />
		</div>
	</div>
</template>

<script setup>
import AddStoreRequestForm from "@/components/mainPage/AddStoreRequestForm.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import MainMenuList from "@/components/mainPage/MainMenuList.vue";
</script>

<style lang="scss">
.main-page__wrapper
{
	display: flex;
}
</style>
