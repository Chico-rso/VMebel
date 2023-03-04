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
		<div class="about-page__sale">
			<div class="about-page__sale-descrip">
				<h3>Экономьте до 50%</h3>
				<span>От стоимости ваших покупок</span>
				<p>
					Ежедневно к платформе присоединяются новые продавцы,
					предлагая лучшие цены и расширяя ассортимент.
					Получайте бонусные рубли за покупки и используйте их при
					оплате товаров
				</p>
			</div>
			<div class="about-page__sale-img">
				<img src="@/assets/img/sale1.png" alt="">
			</div>
		</div>
		<div class="about-page__delivery">
			<ul class="about-page__delivery-list">
				<li class="about-page__delivery-item">
					<img src="@/assets/img/svg/aboutDelivery1.svg" alt="">
					<span>Доставка от 1 рубля удобным для вас способом</span>
				</li>
				<li class="about-page__delivery-item">
					<img src="@/assets/img/svg/aboutDelivery2.svg" alt="">
					<span>Как копить и получать бонусы</span>
				</li>
			</ul>
			<div class="about-page__delivery-descrip">
				<h3>C нами удобно</h3>
				<p>Не переплачивайте за комфорт</p>
				<p>
					Комбинируйте заказы из товаров разных категорий и продавцов,
					не переплачивая за доставку. Кроме того вы можете позволить
					себе необходимую покупку или подарок уже сейчас,
					а выплачивать его стоимость в течение нескольких месяцев
					равными суммами без переплат.
				</p>
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
