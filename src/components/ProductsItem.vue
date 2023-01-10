<template>
	<div class="products-item">
		<ProductsItem />
	</div>
</template>

<script setup>
import ProductsItem from "@/components/ProductsItem.vue";
</script>

<style lang="scss">
.products-item
{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>
