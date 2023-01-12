<template v-cloak>
	<Header />
	<main>
		<router-view />
	</main>
	<DeliveryBenefit />
	<Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeliveryBenefit from "@/components/mainPage/DeliveryBenefit";

</script>
<style lang="scss">
#app
{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
main{flex: 1;}
.footer{background: #EAEAEA;}
[v-cloak]{display: none;}
</style>
