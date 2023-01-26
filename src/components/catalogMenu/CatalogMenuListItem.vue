<template>
	<div
		v-if="isOpen"
		v-for="child in item"
		:key="child.id"
		@mouseover="cycleChildren(child)"
		@mouseleave="closeChildren(child)"
	>
		{{ child.name }}
		<div
			v-if="child.isOpen"
			v-for="grandchild in child.children"
			:key="grandchild.id"
			@mouseover="cycleChildren(grandchild)"
			@mouseleave="closeChildren(grandchild)"
		>
			{{ grandchild.name }}
			<div
				v-if="grandchild.isOpen"
				v-for="greatGrandchild in grandchild.children"
				:key="greatGrandchild.id"
			>
				{{ greatGrandchild.name }}
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
console.log(props.item);
console.log(props.isOpen);

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
