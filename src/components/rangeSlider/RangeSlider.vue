<template>
	<div class="range-slider">
		<div class="range-slider__input-places">
			<div class="range-slider__input-place">
				<span>от</span>
				<input
					type="number"
					v-model.number="rangeSliderData.state.min"
				>
			</div>
			<div class="range-slider__decoration"/>
			<div class="range-slider__input-place">
				<span>до</span>
				<input
					type="number"
					v-model.number="rangeSliderData.state.max"
				>
			</div>
		</div>
		<Slider
			ref="slider"
			v-model="rangeSliderState"
			:max="rangeSliderData.maxValue"
			:tooltips="false"
		>
		</Slider>
	</div>

</template>
<script setup>
import Slider from '@vueform/slider'
import {ref, computed, onMounted} from "vue";

const props = defineProps({
	rangeSliderData: Object,
});

const emit = defineEmits(["changeSliderState"]);

const rangeSliderState = computed({
	get()
	{
		return [props.rangeSliderData.state.min, props.rangeSliderData.state.max];
	},
	set(sliderState)
	{
		emit("changeSliderState", sliderState);
	},
});
</script>
<style src="@vueform/slider/themes/default.css">
</style>
<style lang="scss">
@import "styles/rangeSlider";
</style>
