<template>
	<div class="products-item">
		<div>
			<img :src="img" alt="">
		</div>
		<div>
			<p>{{ title }}</p>
		</div>
	</div>
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
