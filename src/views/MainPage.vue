<template>
	<div>
		<Header/>
		<AddStoreRequestForm />
		<router-view/>
		<Footer/>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AddStoreRequestForm from "@/components/AddStoreRequestForm.vue";

export default {
name: "MainPage",
	components:
	{
		Header,
		Footer,
		AddStoreRequestForm,
	},
	setup (props, context)
	{
		return {};
	},
};
</script>

<style lang="scss">

</style>
