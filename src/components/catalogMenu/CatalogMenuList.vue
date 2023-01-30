<template>
	<div class="catalog-menu-list" v-if="isOpenCatalogMenuList">
		<div class="container">
			<div class="catalog-menu-list__grid">
				<div
					class="catalog-menu-list__item"
					v-for="item in catalogArr"
					:key="item.id"
					@mouseover="cycleChildren(item)"
					@mouseleave="closeChildren(item)"
				>
					<RouterLink to="#">
						{{ item.name }}
						<img src="@/assets/img/svg/arrow-right.svg">
					</RouterLink>
						<CatalogMenuListItem
							:item="item.children"
							:isOpen="item.isOpen"
							@cycleChildren="cycleChildren"
							@closeChildren="closeChildren"
						/>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import CatalogMenuListItem from "@/components/catalogMenu/CatalogMenuListItem";
import { ref } from "vue";

const props = defineProps({
	isOpenCatalogMenuList: {
		type: Boolean,
		required: true,
	},
});

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
	console.log(item.children);

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
