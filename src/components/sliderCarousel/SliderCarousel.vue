<template>
	<div class="slide-carousel">
		<carousel
			:items-to-show="1"
		>
	<!--		:autoplay="3000"-->
	<!--		:wrap-around="true"-->
			<slide v-for="slide in slides" :key="slide.id">
				<img :src="slide.img" alt="">
			</slide>

			<template #addons>
				<navigation/>
				<pagination/>
			</template>
		</carousel>
	</div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";

let slides = [
	{
		id: 1,
		title: "Slide 1",
		img: "https://picsum.photos/1024/768",
	},
	{
		id: 2,
		title: "Slide 2",
		img: "https://picsum.photos/1024/768",
	},
	{
		id: 3,
		title: "Slide 3",
		img: "https://picsum.photos/1024/768",
	},
	{
		id: 4,
		title: "Slide 4",
		img: "https://picsum.photos/1024/768",
	},
]
</script>

<style lang="scss">
@import 'sliderCarousel';
</style>
