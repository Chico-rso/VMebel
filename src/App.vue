<template>
	<router-view/>
	<Header/>
</template>

<script>
import Header from "@/components/Header";

export default {
	components: {Header},
};
</script>
<style lang="scss">
#app
{
	margin: 0;
	padding: 0;
	background: $white;
}
</style>
