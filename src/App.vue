<template v-cloak>
	<main>
		<router-view />
	</main>
</template>

<script setup>
import {onMounted} from "vue";
import { useProductStore } from "@/store/product";


onMounted(() =>
{
	useProductStore().initProducts();
});
</script>

<style lang="scss">
#app
{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
main{flex: 1;}
</style>
