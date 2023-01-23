<template>
	<div class="delivery-benefit">
		<div class="container">
			<div class="delivery-benefit__wrapper">
				<p class="delivery-benefit__title">Выгода с доставкой</p>
				<p class="delivery-benefit__descrip">Подпишитесь и получайте промокоды, акции и подборки товаров на свою почту.</p>
				<form class="delivery-benefit__form" @submit.prevent="submitEmail">
					<label class="delivery-benefit__label">
						<input v-model="email" type="email" placeholder="Введите ваш email"/>
						<span class="delivery-benefit__error" v-if="error">
							{{ error }}
						</span>
					</label>
					<BaseButton class="delivery-benefit__btn" type="submit">Подписаться</BaseButton>
				</form>
				<p class="delivery-benefit__agreement">Нажимая «Подписаться» вы соглашаетесь с <a href="#">Условиями использования сайта</a> и
					<a href="#">Политикой обработки персональных данных.</a></p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineComponent } from "vue";

const email = ref('');
const error = ref('');

const submitEmail = () =>
{
	if (email.value.length < 1)
	{
		error.value = 'Введите email';
	}
	else
	{
		error.value = '';
	}
};
</script>

<style lang="scss">
@import "./styles/deliveryBenefit";
</style>
