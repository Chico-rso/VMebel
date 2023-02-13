<template>
	<div class="range-slider">
		<div class="range-slider__value">
			<div class="range-slider__min">
				<input
					type="text"
					v-model="value"
					@input="updateValue"
				>
			</div>
			<div class="range-slider__max">
				<input
					type="text"
					v-model="value"
					@input="updateValue"
				>
			</div>
		</div>
		<input
			type="range"
			ref="range"
			:min="min"
			:max="max"
			:step="step"
			v-model="value"
		/>
        <div class="range-slider__display">{{ value }}</div>
	</div>
</template>

<script setup>
import {ref} from "vue";

const range = ref(null);
const value = ref(0);

const props = defineProps({
	min: {
		type: Number,
		default: 0
	},
	max: {
		type: Number,
		default: 100
	},
	step: {
		type: Number,
		default: 1
	},
	value: {
		type: Number,
		default: 0
	}
});

const emit = defineEmits(['update:value']);

function updateValue()
{
	console.log('updateValue', ref.range.value);

	emit('update:value', ref.range.value);
}
</script>

<style lang="scss">
@import './styles/rangeSlider.scss';
</style>
