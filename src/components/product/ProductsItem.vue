<template>
	<li  class="products-item">
		<router-link to="#">
			<div class="products-item__img">
				<img src="@/assets/img/ProductImage-1.png" alt="">
			</div>
			<p>{{ title }}</p>
		</router-link>
	</li>
</template>

<script setup>
const props = defineProps({
	title:
	{
		type: String,
		required: true,
	},
	img:
	{
		type: String,
		required: true,
	},
});

</script>

<style lang="scss">
@import './styles/productsItem';
</style>
