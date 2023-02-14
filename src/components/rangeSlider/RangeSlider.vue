<template>
	<div class="range-slider">
		<div class="range-slider__value">
			<div class="range-slider__min">
				<label for="min">Min:</label>
				<input
					id="min"
					type="text"
					v-model.number="rangeSliderData.minValue"
					@input="updateMinValue"
				>
			</div>
			<div class="range-slider__max">
				<label for="max">Max:</label>
				<input
					id="max"
					type="text"
					v-model.number="rangeSliderData.maxValue"
					@input="updateMaxValue"
				>
			</div>
		</div>
		<div class="range-slider__input-wrapper">
			<input
				class="range-slider__input"
				type="range"
				:min="rangeSliderData.min"
				:max="rangeSliderData.max"
				:step="rangeSliderData.step"
				:value="rangeSliderData.minValue"
				@input="updateMinValue"
			/>
			<input
				class="range-slider__input"
				type="range"
				:min="rangeSliderData.min"
				:max="rangeSliderData.max"
				:step="rangeSliderData.step"
				:value="rangeSliderData.maxValue"
				@input="updateMaxValue"
			/>
			<div class="range-slider__display" :style="{left: `${percentageLeft}%`, right: `${percentageRight}%`}">
				{{ rangeSliderData.minValue }} - {{ rangeSliderData.maxValue }}
			</div>
		</div>
	</div>
</template>

<script setup>
import {computed, defineEmits, defineProps} from "vue";

	const props = defineProps( {
		rangeSliderData: Object,
	});
	const emit = defineEmits(["update:min-value", "update:max-value"]);

	const percentageLeft = computed(() => ((props.minValue - props.min) / (props.max - props.min)) * 100);
	const percentageRight = computed(() => ((props.maxValue - props.min) / (props.max - props.min)) * 100);

	function updateMinValue(event)
	{
		const value = Math.min(event.target.value, props.maxValue - props.step);
		emit("update:min-value", value);
	}

	function updateMaxValue(event)
	{
		const value = Math.max(event.target.value, props.minValue + props.step);
		emit("update:max-value", value);
	}

</script>
