<template>
	<div>
		<div v-for="item in catalogArr" :key="item.id" @mouseover="openChildren(item)" @click="closeChildren(item)">
			{{ item.name }}
			<div v-if="item.isOpen" v-for="child in item.children" :key="child.id" @mouseover="openChildren(child)"
			     @click="closeChildren(child)">
				{{ child.name }}
				<div v-if="child.isOpen" v-for="grandchild in child.children" :key="grandchild.id"
				     @click="closeChildren(grandchild)">
					{{ grandchild.name }}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data()
	{
		return {
			catalogArr: [
				{
					id: "1",
					name: "Мягкая мебель",
					isOpen: false,
					children:
					[
						{
							id: "1.1",
							name: "Диваны",
							isOpen: false,
							children:
							[
								{
									id: "1.1.1",
									name: "В гостинную",
								},
							],
						},
					],
				},
			],
		};
	},
	methods: {
		openChildren(item)
		{
			item.isOpen = true;
		},
		closeChildren(item)
		{
			item.isOpen = false;
		},
	},
};
</script>
<style lang="scss">
@import "./styles/catalogMenuList";
</style>
