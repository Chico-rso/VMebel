<template>
	<router-view/>
</template>

<script setup>
import { RouterView } from 'vue-router'
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
