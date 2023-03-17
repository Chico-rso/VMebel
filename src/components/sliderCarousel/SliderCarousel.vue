<template>
	<div class="slide-carousel">
		<Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
			<Slide v-for="slide in slides" :key="slide">
				<img :src="slide.img" alt="">
			</Slide>
		</Carousel>

		<Carousel
			id="thumbnails"
			:items-to-show="4"
			:wrap-around="true"
			v-model="currentSlide"
			ref="carousel"
		>
			<Slide v-for="slide in slides" :key="slide">
				<img
					:src="slide.img"
					alt=""
					class="carousel__item"
				>
			</Slide>
		</Carousel>
	</div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";
import {ref} from "vue";

let currentSlide = ref(0)
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
];
function slideTo(val)
{
	currentSlide.value = val;
}
</script>

<style lang="scss">
@import 'sliderCarousel';
</style>
