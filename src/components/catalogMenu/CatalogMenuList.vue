<template>

</template>

<script setup>
	const catalogArr =
		[
			{
				id: "1",
				name: 'Мягкая мебель',
				children:
					[
						{
							id: "1.1",
							name: 'Диваны',
							children:
								[
									{
										id: "1.1.1",
										name: 'В гостинную',
									}
								]
						}
					]
			},
		]
</script>

<style lang="scss">
@import "./styles/catalogMenuList";
</style>
