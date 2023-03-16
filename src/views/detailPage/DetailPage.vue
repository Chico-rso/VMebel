<template>
	<div class="detail-page">
		<div class="detail-page__top">
			<h3>Чайная машина Kitfort KT-630</h3>
			<span>Артикул 100 024 215 307</span>
		</div>
		<div class="detail-page__slider">
			<SliderCarousel />
		</div>
		<div class="detail-page__shops">
			<p>Магазины с данным товаром</p>
			<ul class="detail-page__shops-list">
				<li class="detail-page__shops-item">
					<accordion
						title="Johnson & Johnson"
					    sub-title="ул. К. Либкнехта, д. 2, г."
					>
						example
					</accordion>
				</li>
				<li class="detail-page__shops-item">
					<accordion
						title="Ferrari"
						sub-title="ул. Ленина, д. 40, г. Майкоп"
					>
						example
					</accordion>
				</li>
				<li class="detail-page__shops-item">
					<accordion
						title="IBM"
						sub-title="пр-т Калинина, д. 8, г. Барнаул"
					>
						example
					</accordion>
				</li>
				<li class="detail-page__shops-item">
					<accordion
						title="Starbucks"
						sub-title="ул. Лермонтова, д. 14, пом. 3"
					>
						example
					</accordion>
				</li>
				<li class="detail-page__shops-item">
					<accordion
						title="L'Oréal"
						sub-title="ул. Большая Московская, д."
					>
						example
					</accordion>
				</li>
			</ul>
			<button class="detail-page__shops-btn">
				Показать все магазины
			</button>
		</div>
		<div class="detail-page__tabs">
			<ul class="detail-page__tabs-list">
				<li
					class="detail-page__tabs-item"
					:class="{' detail-page__tabs-item--active': activeTab === index}"
					v-for="(tab, index) in tabs"
					:key="index"
					@click="changeTab(index)"
				>
					<a href="">{{ tab.title }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import SliderCarousel from "@/components/sliderCarousel/SliderCarousel.vue";
import Accordion from "@/components/accordion/Accordion.vue";
import { ref } from "vue";

const activeTab = ref(0);

const tabs = [
	{
		title: "О товаре",
	},
	{
		title: "Магазины",
	},
	{
		title: "Характеристики",
	},
];

const changeTab = (index) => {
	activeTab.value = index;
};
</script>

<style lang="scss">
@import 'detailPage';
</style>
