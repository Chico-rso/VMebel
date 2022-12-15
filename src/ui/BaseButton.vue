<template>
	<div class="base-button">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "BaseButton",
};
</script>

<style lang="scss">
.base-button
{
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	padding: 0 30px;
	background: #FC4442;
	border-radius: 100px;
	color: $white;
	font-size: 13px;
	font-weight: 500;
	line-height: 38px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover
	{
		background: #FFFFFF;
		color: #FC4442;
		outline: 1px solid #FC4442;
	}
}
</style>
