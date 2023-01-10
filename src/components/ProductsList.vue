<template>
	<div class="products-list">
		<ProductsItem />
	</div>
</template>

<script setup>
import ProductsItem from "@/components/ProductsItem.vue";
</script>

<style lang="scss">
.products-list
{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>
