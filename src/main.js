import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/UI/ui.js";
import { vMaska } from "maska";
import { createPinia } from 'pinia';
import Slider from '@vueform/slider'


const pinia = createPinia();
const app = createApp(App).directive("maska", vMaska);
app.use(router);
app.use(pinia);

components.forEach(component =>
{
	app.component(component.name, component);
});

app.use(Slider)

app.mount("#app");



