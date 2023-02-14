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
			:bg-style="bgStyle"
			:process-style="processStyle"
		>
		</Slider>
<!--			:tooltip="null"-->
	</div>

</template>
<script setup>
import "vue-range-component/dist/vue-range-slider.css";

import {ref, computed, onMounted} from "vue";

const props = defineProps({
	rangeSliderData: Object,
});

onMounted(() => {
	console.log(props.rangeSliderData.value);
});

const emit = defineEmits(["changeSliderState"]);

const bgStyle = ref({background: "#FCF9EC"});
const processStyle = ref({background: "#F0E19E"});
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
