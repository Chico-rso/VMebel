<template>
	<div class="accordion">
		<div
			class="accordion__header"
			:class="{'accordion__header-open': isOpenAccordion }"
			@click="isOpenAccordion = !isOpenAccordion">
			<span>
				{{ title }}
			</span>
			<img src="@/assets/img/svg/arrow-up.svg" alt="">
		</div>
		<transition name="accordion__animate">
			<div class="accordion__content" v-if="isOpenAccordion">
				<slot>
				</slot>
			</div>
		</transition>
	</div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
	title:
	{
		type: String,
		required: true
	}
});
const isOpenAccordion = ref(false);

</script>

<style lang="scss">
@import "styles/accordion";
</style>
