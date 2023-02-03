<template>
<ul class="breadcrumbs">
	<li
		class="breadcrumbs__item"
		v-for="(crumb, index) in crumbs"
		:key="index"
	>
		<router-link
			:to="crumb.path"
			class="breadcrumbs__link"
		>
			{{ crumb.text }}
			<img src="@/assets/img/svg/minus.svg" alt="">
		</router-link>
	</li>
</ul>
</template>

<script setup>
const props = defineProps({
	crumbs: {
	  type: Array,
	  required: true,
	},
});
</script>

<style lang="scss">
@import "styles/breadcrumbs";
</style>
