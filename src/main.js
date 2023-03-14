import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/UI/ui.js";
import { vMaska } from "maska";
import { createPinia } from 'pinia';
import Slider from '@vueform/slider';
import { useCookies } from "vue3-cookies";
import YmapPlugin from 'vue-yandex-maps';


const pinia = createPinia();
const app = createApp(App).directive("maska", vMaska);

router.beforeEach((to, from, next) => {
	if (to.matched.length === 0) {
		next('/not-found');
	} else {
		next()
	}
});


app.use(router);
app.use(pinia);
app.use(useCookies);
app.use(YmapPlugin, {
	settings: {
		apiKey: 'abd79a0d-60f0-4eac-bcd6-95db1c7cdd1c', // Индивидуальный ключ API
		lang: 'ru_RU', // Используемый язык
		coordorder: 'latlong', // Порядок задания географических координат
		debug: false, // Режим отладки
		version: '2.1' // Версия Я.Карт
	}
})
components.forEach(component =>
{
	app.component(component.name, component);
});

app.use(Slider)

app.mount("#app");



