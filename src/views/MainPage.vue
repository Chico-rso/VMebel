<template>
	<Header />
	<main>
		<AddStoreRequestForm />
	</main>
	<DeliveryBenefit />
	<Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AddStoreRequestForm from "@/components/AddStoreRequestForm.vue";
import DeliveryBenefit from "@/components/DeliveryBenefit.vue";
</script>

<style lang="scss">
</style>
