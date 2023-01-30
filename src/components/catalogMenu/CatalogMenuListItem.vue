<template>
<!--		v-if="isOpen"-->
	<li
		class="catalog-menu-list-item"
		v-for="child in item"
		:key="child.id"
		@mouseover="cycleChildren(child)"
		@mouseleave="closeChildren(child)"
	>
		<RouterLink to="#">
			{{ child.name }}
			<img
				src="@/assets/img/svg/arrow-right.svg"
				v-if="child.isOpen && child.children.length > 0"
			>
		</RouterLink>
<!--			v-if="child.isOpen"-->
		<ul
			class="catalog-menu-list-item__great-grandchild"
			v-for="grandchild in child.children"
			:key="grandchild.id"
			@mouseover="cycleChildren(grandchild)"
			@mouseleave="closeChildren(grandchild)"
		>
			<RouterLink to="#">
				{{ grandchild.name }}
				<img
					src="@/assets/img/svg/arrow-right.svg"
					v-if="grandchild.isOpen && grandchild.children.length > 0"
				>
			</RouterLink>
<!--				v-if="grandchild.isOpen"-->
			<li
				v-for="greatGrandchild in grandchild.children"
				:key="greatGrandchild.id"
			>
				<RouterLink to="#">
					{{ greatGrandchild.name }}
					<img
						src="@/assets/img/svg/arrow-right.svg"
						v-if="greatGrandchild.isOpen && greatGrandchild.children.length > 0"
					>
				</RouterLink>
			</li>
		</ul>
	</li>
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
