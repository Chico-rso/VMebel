<template>
	<div
		class="catalog-menu-list-item"
		v-if="isOpen"
		v-for="child in item"
		:key="child.id"
		@mouseover="cycleChildren(child)"
		@mouseleave="closeChildren(child)"
	>
		<RouterLink to="#">
			{{ child.name }}
		</RouterLink>
		<div
			class="catalog-menu-list-item__great-grandchild"
			v-if="child.isOpen"
			v-for="grandchild in child.children"
			:key="grandchild.id"
			@mouseover="cycleChildren(grandchild)"
			@mouseleave="closeChildren(grandchild)"
		>
			<RouterLink to="#">
				{{ grandchild.name }}
			</RouterLink>
			<div
				v-if="grandchild.isOpen"
				v-for="greatGrandchild in grandchild.children"
				:key="greatGrandchild.id"
			>
				<RouterLink to="#">
					{{ greatGrandchild.name }}
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup>

const emit = defineEmits(["cycleChildren", "closeChildren"]);
const props = defineProps({
	item: {
		type: Array,
		required: true,
	},
	isOpen: {
		type: Boolean,
		required: true,
	},
});

function cycleChildren(item)
{
	emit("cycleChildren", item);
}

function closeChildren(item)
{
	emit("closeChildren", item);
}
</script>

<style lang="scss">
@import "./styles/catalogMenuLIstItem";
</style>
