<template>
	<button class="base-button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "BaseButton",
};
</script>

<style lang="scss">
@import "./styles/baseButton";
</style>
