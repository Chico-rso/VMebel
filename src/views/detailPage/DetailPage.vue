<template>
	<div class="detail-page">
		<div class="detail-page__top">
			<h3>Чайная машина Kitfort KT-630</h3>
			<span>Артикул 100 024 215 307</span>
		</div>
		<div class="detail-page__slider">
			<SliderCarousel/>
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
					@click.prevent="changeTab(index)"
				>
					<a href="">{{ tab.title }}</a>
				</li>
			</ul>
		</div>
		<div class="detail-page__tabs-content">
			<ul class="detail-page__tabs-content-list">
				<li
					class="detail-page__tabs-content-item"
					:class="{' detail-page__tabs-content-item--active': activeTab === index}"
					v-for="(content, index) in tabContent"
					:key="index"
				>
					<h3>{{ content.title }}</h3>
					<p>{{ content.content }}</p>
				</li>
			</ul>
		</div>
		<div class="detail-page__specifications">
			<h3>Характеристики</h3>
			<ul class="detail-page__specifications-list">
				<li class="detail-page__specifications-item"
					v-for="(specification, index) in specifications"
					:key="index"
				>
					<span>{{ specification.first }}</span> <span></span> <span>{{ specification.second }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import SliderCarousel from "@/components/sliderCarousel/SliderCarousel.vue";
import Accordion from "@/components/accordion/Accordion.vue";
import {ref} from "vue";

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
const tabContent = [
	{
		title: "Кресло рабочее Vivianne",
		content: "Кресло Vivianne с сеточным каркасом сиденья и спинки поддерживает удобную рабочую позу на протяжении длительного времени. Лаконичный дизайн модели выдержан в стиле минимализма, подходящего для эргономичного офисного пространства. Форма спинки разработана с учетом анатомических особенностей позвоночника. Механизм качания и регулировка высоты сиденья дают возможность выбрать оптимальное положение для пользователя. За счет небольшого веса модели и стойки на колесах кресло можно свободно передвинуть в нужном направлении.",
	},
	{
		title: "example1",
		content: "example1",
	},
	{
		title: "example2",
		content: "example2",
	},
];
const specifications = [
	{
		first: 'Коллекция',
		second: 'Vivianne',
	},
	{
		first: 'Производитель',
		second: 'Китай',
	},
	{
		first: 'Гарантия',
		second: '24 мес.',
	},
	{
		first: 'Срок службы',
		second: 'Год: 5',
	},
	{
		first: 'Размеры кресла (ШхВхГ)',
		second: '54 х 107 х 65 см',
	},
	{
		first: 'Цвет',
		second: 'серый',
	}

]
const changeTab = (index) =>
{
	activeTab.value = index;
};
</script>

<style lang="scss">
@import 'detailPage';
</style>
