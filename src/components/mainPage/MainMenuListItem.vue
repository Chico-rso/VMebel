<template>
	<li class="main-menu-list-item">
		<router-link to="#">
			{{title}}
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
})
</script>

<style lang="scss">
.main-menu-list-item
{
	margin-bottom: 10px;
	&:last-child{margin-bottom: 0;}
	a
	{
		font-weight: $regular;
		font-size: 16px;
		line-height: 19px;
		color: #6C6C6C;
	}
}
</style>
