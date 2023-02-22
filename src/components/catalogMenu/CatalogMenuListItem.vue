<template>
	<ul
		v-if="isOpen"
		class="catalog-menu-list-item__child"
		v-for="child in item"
		:key="child.id"
		@mouseover="cycleChildren(child)"
		@mouseleave="closeChildren(child)"
	>
		<li
		>
			<RouterLink to="#">
				{{ child.name }}
				<img
					src="@/assets/img/svg/arrow-right.svg"
					v-if="child.isOpen && child.children.length > 0"
				>
			</RouterLink>
			<ul class="catalog-menu-list-item__grandchild"
				v-if="child.isOpen"
				v-for="grandchild in child.children"
				:key="grandchild.id"
				@mouseover="cycleChildren(grandchild)"
				@mouseleave="closeChildren(grandchild)"
			>
				<li
					class="catalog-menu-list-item__great-grandchild"
					v-for="greatGrandchild in grandchild.children"
					:key="greatGrandchild.id"
				>
					<RouterLink to="#">
						{{ grandchild.name }}
						<img
							src="@/assets/img/svg/arrow-right.svg"
							v-if="grandchild.isOpen && grandchild.children.length > 0"
						>
					</RouterLink>
					<ul
						v-if="grandchild.isOpen"
					>
						<li>
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
			</ul>
		</li>
	</ul>
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
