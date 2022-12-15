<template>
	<slot>
		<input class="base-input" type="text" placeholder="+7">
	</slot>
</template>

<script>
export default {
	name: "BaseInput",
};
</script>

<style lang="scss">
.base-input
{
	padding-left: 18px;
	position: relative;
	background: #FFFFFF;
	border: 1px solid #EAEAEA;
	border-radius: 100px;
	outline: none;
	height: 44px;
	font-weight: $regular;
	font-size: 13px;
	line-height: 17px;
	display: flex;
	align-items: center;
	color: $grey;
}
</style>
