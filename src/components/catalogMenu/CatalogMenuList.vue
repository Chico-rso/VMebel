<template>
	<div>
		<div v-for="item in catalogArr" :key="item.id" @mouseover="cycleChildren(item)"
		     @mouseleave="closeChildren(item)">
			{{ item.name }}
			<div v-if="item.isOpen" v-for="child in item.children" :key="child.id" @mouseover="cycleChildren(child)"
			     @mouseleave="closeChildren(child)">
				{{ child.name }}
				<div v-if="child.isOpen" v-for="grandchild in child.children" :key="grandchild.id"
				     @mouseover="cycleChildren(grandchild)" @mouseleave="closeChildren(grandchild)">
					{{ grandchild.name }}
					<div v-if="grandchild.isOpen" v-for="greatGrandchild in grandchild.children"
					     :key="greatGrandchild.id">
						{{ greatGrandchild.name }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import {ref} from "vue";

const catalogArr = ref([
	{
		id: "1",
		name: "Мягкая мебель",
		isOpen: false,
		children: [
			{
				id: "1.1",
				name: "Диваны",
				isOpen: false,
				children: [
					{
						id: "1.1.1",
						name: "Детские",
						isOpen: false,
						children: [
							{
								id: "1.1.1.1",
								name: "Надувные",
								isOpen: false,
							},
						],
					},
				],
			},
		],
	},
]);

function cycleChildren(item)
{
	if (item.children)
	{
		item.isOpen = true;
	}
}

function closeChildren(item)
{
	if (item.children)
	{
		item.isOpen = false;
		item.children.forEach((child) =>
		{
			child.isOpen = false;
			if (child.children)
			{
				child.children.forEach((grandchild) =>
				{
					grandchild.isOpen = false;
				});
			}
		});
	}
}
</script>
<style lang="scss">
@import "./styles/catalogMenuList";
</style>
