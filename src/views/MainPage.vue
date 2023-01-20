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
import AddStoreRequestForm from "@/components/addStoreRequestForm/AddStoreRequestForm.vue";
import ProductsList from "@/components/product/ProductsList.vue";
import MainMenuList from "@/components/mainMenuList/MainMenuList.vue";
</script>

<style lang="scss">
.main-page__wrapper
{
	display: grid;
	grid-template-columns: 1fr;
	margin-bottom: 49px;
}
@media (min-width: 1440px)
{
	.main-page__wrapper{grid-template-columns: repeat(4, 1fr);}
}
</style>
