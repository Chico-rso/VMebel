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
.delivery-benefit{margin-bottom: 30px;}
.delivery-benefit__wrapper
{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 14px 21px 14px;
	background: #FCF9EC;
	border-radius: 20px;
}
.delivery-benefit__title
{
	margin-bottom: 15px;
	font-weight: $medium;
	font-size: 24px;
	line-height: 28px;
	color: $black;
}
.delivery-benefit__descrip
{
	margin-bottom: 15px;
	text-align: center;
	font-weight: $regular;
	font-size: 14px;
	line-height: 16px;
	color: $black;
}
.delivery-benefit__form
{
	max-width: 516px;
	width: 100%;
	position: relative;
	margin-bottom: 15px;
	input
	{
	    height: 44px;
	    width: 100%;
	    padding: 0 150px 0 16px;
	    background: #FFFFFF;
	    border: 1px solid #EAEAEA;
	    border-radius: 100px;
		color: $grey;
		&:focus{border-color:  $btn-color;}
		&::placeholder{color: $input;}
	}
}
.delivery-benefit__btn
{
	position: absolute;
	top: 50%;
	right: 3px;
	transform: translateY(-50%);
}
.delivery-benefit__error
{
	position: absolute;
	margin: 0;
	top: 42px;
	left: 0;
	padding: 0 16px;
	line-height: 18px;
	font-family: $baseFont;
	font-style: normal;
	font-weight: $regular;
	font-size: 10px;
	color: red;
}
.delivery-benefit__agreement
{
	max-width: 515px;
	font-weight: $regular;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	color: $black;
	a
	{
		text-decoration: solid underline;
		&:hover{color: $btn-color;}
	}
}
@media (min-width: 768px)
{
	.delivery-benefit{margin-bottom: 40px;}
	.delivery-benefit__wrapper{padding: 25px 30px 26px 30px;}
	.delivery-benefit__descrip
	{
		margin-bottom: 49px;
		font-size: 16px;
		line-height: 19px;
	}
	.delivery-benefit__form{margin-bottom: 49px;}
}
@media (min-width: 1440px)
{
	.delivery-benefit{margin-bottom: 66px;}
	.delivery-benefit__wrapper{padding: 38px 30px 61px 30px;}
	.delivery-benefit__title{margin-bottom: 12px;}
	.delivery-benefit__descrip{margin-bottom: 46px;}
	.delivery-benefit__form{margin-bottom: 29px;}
}
</style>
