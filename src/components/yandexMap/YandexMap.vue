<template>
	<YandexMap
		:coordinates="coords"
		:zoom="zoom"
		:controls="controls"
	>
		<YandexMarker
			:coordinates="coords"
			:marker-id="123"
		></YandexMarker>
	</YandexMap>
</template>

<script setup>
import { ref } from "vue";
import { YandexMarker } from "vue-yandex-maps";

const coords = ref([55.76, 37.64]);
const zoom = ref(10);
const controls = ref(["zoomControl"]);



</script>

<style lang="scss">
@import "styles/yndexMap";
</style>
