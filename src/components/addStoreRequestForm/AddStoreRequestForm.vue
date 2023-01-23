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
	setup ()
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
	@import './styles/addStoreRequestForm';
</style>
