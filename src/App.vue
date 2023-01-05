<template>
	<router-view id="app"/>
</template>

<script>
import {ref, defineComponent} from "vue";

export default defineComponent( {
	name: "App",
	components:{},
	setup (props, context)
	{
		return {};
	},
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
.footer{background: #EAEAEA;}
</style>
