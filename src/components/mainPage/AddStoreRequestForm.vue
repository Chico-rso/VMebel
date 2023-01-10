<template>
	<div class="container">
		<div class="add-store-reqest-form">
			<div>
				<p>Отправить заявку на добавление магазина</p>
				<span>Подключение к макретплейсю бесплатное</span>
				<form @submit.prevent="submitHandler">
					<label class="add-store-reqest-form__label">
						<input
							v-model="phoneNumber"
							type="tel"
							v-maska
							data-maska="+7(###)-###-##-##"
							placeholder="+7"
						/>
						<span class="add-store-reqest-form__error" v-if="error">
							{{ error }}
						</span>
					</label>
					<BaseButton class="add-store-reqest-form__btn" type="submit">Отправить</BaseButton>
				</form>
			</div>
			<div>
				<img src="@/assets/img/svg/addStore.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import { ref, defineComponent } from "vue";
import BaseButton from "@/components/UI/BaseButton";
import BaseInput from "@/components/UI/BaseInput";
export default defineComponent({
	name: "AddStoreRequestForm",
	components: {BaseInput, BaseButton},
	setup (props, context)
	{
		const phoneNumber = ref('');
		const error = ref('');


		const submitHandler = () =>
		{
			if (phoneNumber.value.length < 11)
			{
				error.value = 'Номер телефона должен быть не менее 11 символов';
			}
			else
			{
				error.value = '';
			}
		};
		return {
			phoneNumber,
			submitHandler,
			error,
		};
	},
});
</script>

<style lang="scss">
.add-store-reqest-form
{
	background: #F5FBFB;
	border-radius: 10px;
	text-align: center;
	padding: 23px 16px 28px 22px;
	margin-bottom: 21px;
	p
	{
		margin-bottom: 14px;
		font-family: $baseFont;
		font-style: normal;
		font-weight: $bold;
		font-size: 16px;
		line-height: 19px;
		color: $black;
	}
	span
	{
		display: none;
		font-family: $baseFont;
		font-style: normal;
		font-weight: $regular;
		font-size: 16px;
		line-height: 19px;
		color: $grey;
	}
	form
	{
		max-width: 328px;
		position: relative;
		margin: 0 auto;
	}
	img{display: none;}
}
.add-store-reqest-form__label
{
	input
	{
		height: 44px;
		width: 100%;
		padding: 0 130px 0 16px;
		background: #FFFFFF;
		border: 1px solid #EAEAEA;
		border-radius: 100px;
		color: $grey;
		&:focus{border-color:  $btn-color;}
		&::placeholder{color: $input;}
	}
	.add-store-reqest-form__error
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
}
.add-store-reqest-form__btn
{
	position: absolute;
	bottom: 3px;
	right: 3px;
}
@media (min-width: 768px)
{
	.add-store-reqest-form
	{
		padding: 23px 0 28px 24px;
		margin-bottom: 40px;
		p
		{
			font-size: 26px;
			line-height: 30px;
			margin-bottom: 7px;
		}
		span
		{
			display: block;
			margin-bottom: 27px;
			font-size: 16px;
			line-height: 19px;
		}
	}
}
@media (min-width: 1440px)
{
	.add-store-reqest-form
	{
		display: flex;
		justify-content: space-between;
		align-items: center;
		p,
		span,
		{
			text-align: left;
		}
		form{margin: 0;}
		img
		{
			display: block;
			margin-right: 53px;
		}
	}
}
</style>
