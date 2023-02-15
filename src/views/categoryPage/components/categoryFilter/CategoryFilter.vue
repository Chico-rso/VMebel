<template>
	<div class="category-filter">
		<div class="category-filter__close" @click="closeCategoryFilter">
			<img src="@/assets/img/svg/closeIcon.svg" alt="">
		</div>
		<div class="category-filter__background"></div>
		<div class="category-filter__content">
			<ul class="category-filter__subcategories">
				<li>
					<router-link to="#" class="category-filter__subcategories-title">
						Диваны и кресла
					</router-link>
				</li>
				<li
					v-for="subcategory in subcategories"
					:key="subcategory.id"
					class="category__filter-subcategories-item">
					<router-link :to="subcategory.url">
						{{ subcategory.title }}
					</router-link>
				</li>
			</ul>
			<ul class="category-filter__accordion">
				<li>
					<accordion title="Цена, ₽">
						<RangeSlider
							:rangeSliderData="rangeSliderData"
							@changeSliderState="setNewRangeSliderState"
						/>
					</accordion>
				</li>
				<li>
					<accordion title="Бренд">
						<CheckBoxList
							id="brand"
							:checkBoxListData="brandCheckBoxListData"
						/>
					</accordion>
				</li>
				<li>
					<accordion title="Коллекция">
						<CheckBoxList
							id="collection"
							:checkBoxListData="collectionCheckBoxListData"
						/>
					</accordion>
				</li>
			</ul>
			<button class="category-filter__clear">Очистить фильтр</button>
		</div>
	</div>
</template>

<script setup>
import {reactive, ref, watch,} from "vue";
import { useCategoryFilterDataStore } from "@/store/categoryFilterData";
import Accordion from "@/components/accordion/Accordion.vue";
import CheckBoxList from "@/components/checkBoxList/CheckBoxList.vue";
import RangeSlider from "@/components/rangeSlider/RangeSlider.vue";

const { brandCheckBoxListData, collectionCheckBoxListData } = useCategoryFilterDataStore();

const props = defineProps({
	openCategoryFilter: {
		type: Boolean,
		required: true,
	},
});
const emit = defineEmits(["closeCategoryFilter"]);

let close = ref(props.openCategoryFilter);

const rangeSliderData = reactive({
	state: {
		min: 25,
		max: 6500,
	},
	maxValue: 6500,
});
const subcategories = ref([
	{id:2, title:"Mobiles, Computers", url:"/", },
	{id:3, title:"Movies, Music & Video Games", url:"/", },
	{id:4, title:"Gift Cards & Mobile Recharges", url:"/", },
	{id:5, title:"Car, Motorbike, Industrial", url:"/", },
])
function closeCategoryFilter()
{
	emit("closeCategoryFilter", close.value);
}
function setNewRangeSliderState(sliderState)
{
	rangeSliderData.state.min = sliderState[0] <= 25 ? 25 : sliderState[0];
	rangeSliderData.state.max = sliderState[1];
}
</script>

<style lang="scss">
@import "styles/categoryFilter";
</style>
