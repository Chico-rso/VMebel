<template>
<li class="mobile-burger-menu-item">
	<router-link to="#">
		<span>{{title}}</span>
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
@import "./styles/mobileBurgerMenuItem";
</style>
