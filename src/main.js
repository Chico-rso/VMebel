import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI/ui.js'
import maska from "maska";



const app = createApp(App);
app.use(maska);
app.use(router);

app.directive('v-mask', maska);

components.forEach(component => {
	app.component(component.name, component);
});

app.mount('#app')



