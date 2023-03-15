<template>
	<carousel :items-to-show="1.5">
		<slide v-for="slide in slides" :key="slide.id">
			<img :src="slide.img" alt="">
		</slide>

		<template #addons>
			<navigation/>
			<pagination/>
		</template>
	</carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";

let slides = [
	{
		id: 1,
		title: "Slide 1",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 2,
		title: "Slide 2",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 3,
		title: "Slide 3",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 4,
		title: "Slide 4",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 5,
		title: "Slide 5",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 6,
		title: "Slide 6",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 7,
		title: "Slide 7",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 8,
		title: "Slide 8",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 9,
		title: "Slide 9",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 10,
		title: "Slide 10",
		img: "https://picsum.photos/200/300",
	}
]
</script>

<style lang="scss">
@import 'sliderCarousel';
</style>
