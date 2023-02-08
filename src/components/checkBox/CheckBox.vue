<template>
	<div class="checkbox">
		<input
			type="checkbox"
			:id="id"
			:checked="state"
			@change="$emit('changeState')"
		/>
		<label
			:for="id"
			class="checkbox__point"
		>
			<img src="@/assets/img/svg/checkBox.svg" alt="">
		</label>
		<label :for="id" class="checkbox__label">{{label}}</label>
	</div>
</template>

<script setup>
const props = defineProps({
	label: String,
	id: String,
	state: Boolean,
});
</script>

<style lang="scss">
@import "styles/checkBox.scss";
</style>
