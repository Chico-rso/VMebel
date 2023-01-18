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
@import "./styles/mainMenuListItem";
</style>
