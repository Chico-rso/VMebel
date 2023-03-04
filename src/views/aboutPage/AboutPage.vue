<template>
	<div class="about-page">
<!--		<Breadcrumbs crumbs="О компании" />-->
		<div class="about-page__poster">
			<img src="@/assets/img/aboutMainPoster.png" alt="">
			<div class="about-page__btn">
				<img src="@/assets/img/svg/aboutLogo.svg" alt="">
				<base-button>К ПОКУПКАМ</base-button>
			</div>
		</div>
		<div class="about-page__profit">
			<ul class="about-page__profit-list">
				<li class="about-page__profit-item">
					<img src="@/assets/img/svg/aboutProfit1.svg" alt="">
					<span>Гарантия лучших цен</span>
				</li>
				<li class="about-page__profit-item">
					<img src="@/assets/img/svg/aboutProfit2.svg" alt="">
					<span>Бонусы за каждый отзыв</span>
				</li>
				<li class="about-page__profit-item">
					<img src="@/assets/img/svg/aboutProfit3.svg" alt="">
					<span>Кэшбек до 25% на всё</span>
				</li>
				<li class="about-page__profit-item">
					<img src="@/assets/img/svg/aboutProfit4.svg" alt="">
					<span>Как копить и получать бонусы</span>
				</li>
			</ul>
			<div class="about-page__descrip">
				<h3>С нами выгодно</h3>
				<p>У нас вы найдете более 2 500 000 товаров от 8 000 интернет-магазинов</p>
				<p>Выбирайте то, что вам нужно, читайте отзывы и сравнивайте цены разных магазинов.Совершайте регулярные покупки и получайте бонусные рубли. А всё самое сложное мы возьмем на себя.</p>
			</div>
		</div>

	</div>
</template>

<script setup>

import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
</script>

<style lang="scss">
@import "about";
</style>
