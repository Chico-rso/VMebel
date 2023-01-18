<template>
	<router-link to="#" class="products-item">
		<img :src="img" alt="">
		<p>{{ title }}</p>
	</router-link>
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
