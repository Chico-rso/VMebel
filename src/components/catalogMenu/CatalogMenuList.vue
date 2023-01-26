<template>
	<div>
		<ul
			v-for="item in catalogArr"
			:key="item.id"
			@mouseover="cycleChildren(item)"
			@mouseleave="closeChildren(item)"

		>
			{{ item.name }}
			<CatalogMenuListItem
				:item="item.children"
				:isOpen="item.isOpen"
				@cycleChildren="cycleChildren(item)"
				@closeChildren="closeChildren(item)"
			/>
		</ul>
	</div>
</template>
<script setup>
import CatalogMenuListItem from "@/components/catalogMenu/CatalogMenuListItem";
import { ref } from "vue";

const catalogArr = ref([
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
						name: "Детские",
						isOpen: false,
						children:
						[
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
