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
.products-item
{
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 279px;
	border: 1px solid #EAEAEA;
	border-radius: 10px;
	padding: 10px;
}
@media(min-width: 1440px)
{
	.products-item{width: 100%;}
}
</style>
