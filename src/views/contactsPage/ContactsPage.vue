<template>
	<div class="contacts-page">
		<h2>contacts</h2>
		<div class="contacts-page__map">
			<YandexMap/>
		</div>
	</div>
</template>

<script setup>
import YandexMap from "@/components/yandexMap/YandexMap.vue";
</script>

<style lang="scss">
@import "contactsPage";
</style>
