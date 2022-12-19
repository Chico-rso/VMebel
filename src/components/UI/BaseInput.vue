<template>
	<slot>
		<input
			class="base-input"
			type="text"
			:placeholder="placeholder"
		>
	</slot>
</template>

<script>
export default {
	name: "BaseInput",
	props: {
		placeholder:
		{
			type: String,
			default: "",
		},
	},
};
</script>

<style lang="scss">
.base-input
{
	width: 100%;
	padding-left: 18px;
	background: #FFFFFF;
	border: 1px solid #EAEAEA;
	border-radius: 100px;
	outline: none;
	font-weight: $regular;
	display: flex;
	align-items: center;
}
</style>
