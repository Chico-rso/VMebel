<template>
	<div id="app">
		<Header/>
		<main class="main">
			<router-view/>
		</main>
	</div>
		<Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
	components: {Header, Footer},
};
</script>
<style lang="scss">
#app
{
	margin: 0;
	padding: 0;
	background: $white;
	display: flex;
	flex-direction: column;
	height: 100dvh;
	min-height: 100vh;
	overflow: auto;
}
.main{flex: 1;}
.footer{background: $footer;}
</style>
