import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/UI/ui.js";
import { vMaska } from "maska";


const app = createApp(App).directive("maska", vMaska);
app.use(router);


components.forEach(component =>
{
	app.component(component.name, component);
});

app.mount("#app");



