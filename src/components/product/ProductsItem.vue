<template>
	<li  class="products-item">
		<div class="products-item__add-favorite" @click="addFavorite" v-if="favoriteIcon">
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
import {onMounted, ref} from "vue";
import {useCookies} from "vue3-cookies";

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
	id:
	{
		type: Number,
		required: true,
	},
	favoriteIcon:
	{
		type: Boolean,
		default: false,
	}
});
const emit = defineEmits(['addFavorite']);

const isFavorite = ref(false);
function addFavorite()
{
	isFavorite.value = !isFavorite.value;
	emit('addFavorite', isFavorite.value, props.id);
}
onMounted(() =>
{
	let products = useCookies().cookies.get('favorite');
	if(products)
	{
		products = JSON.parse(products);
		console.log(products);

		if(products.includes(props.id))
		{
			isFavorite.value = true;
		}
	}
});
</script>

<style lang="scss">
@import './styles/productsItem';
</style>
