<template>
	<div class="page-not-layout">
		<router-view />
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss">
.page-not-layout
{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
</style>
