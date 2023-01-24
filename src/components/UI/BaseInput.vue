<template>
	<div>
		<slot>
			<input
				class="base-input"
				type="text"
				:placeholder="placeholder"
			>
		</slot>
	</div>
</template>

<script>
export default {
	name: "BaseInput",
	props:
	{
		placeholder:
		{
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="scss">
@import "./styles/baseInput";
</style>
