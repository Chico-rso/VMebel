<template>
	<li  class="products-item">
		<div class="products-item__add-favorite" @click="addFavorite">
			<img src="@/assets/img/svg/compliteAddFavorit.svg" alt="" v-if="isFavorite">
			<img src="@/assets/img/svg/addFavorit.svg" alt="" v-else>
		</div>
		<router-link to="#">
			<div class="products-item__img">
				<img src="@/assets/img/ProductImage-1.png" alt="">
			</div>
			<p>{{ title }}</p>
		</router-link>
	</li>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
	title:
	{
		type: String,
		required: true,
	},
	img:
	{
		type: String,
		required: true,
	},
});
const emit = defineEmits(['addFavorite']);

const isFavorite = ref(false);

function addFavorite()
{
	isFavorite.value = !isFavorite.value;
	emit('addFavorite');
}

</script>

<style lang="scss">
@import './styles/productsItem';
</style>
