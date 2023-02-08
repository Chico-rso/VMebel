<template>
	<div class="check-box-list">
		<div class="check-box-list__find-place">
			<input
				type="text"
				placeholder="Найти"
				v-model="findName"
			>
			<img src="../../assets/img/svg/searchIcon.svg" alt="">
		</div>
		<div class="check-box-list__main">
			<div
				class="check-box-list__checkbox"
				v-for="(item, index) of checkBoxListData"
				:key="index"
			>
				<CheckBox
					v-if="existFindNameInLabelName(item)"
					:label="item.name"
					:id="id + index"
					:state="item.state"
					@changeState="item.state = !item.state"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import CheckBox from '@/components/checkBox/CheckBox.vue';

const props = defineProps({
	id: String,
	checkBoxListData: Array,
});


const checkBoxListData = ref(props.checkBoxListData);
const findName = ref('');

const existFindNameInLabelName = (checkBox) => {
	return checkBox.name.toUpperCase().includes(findName.value.toUpperCase());
};

</script>

<style lang="scss">
@import "styles/checkBoxList.scss";
</style>
