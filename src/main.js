import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import components from "@/components/UI/ui.js";
import maska from "maska";


const app = createApp(App);
app.use(router);
app.use(maska);


components.forEach(component =>
{
	app.component(component.name, component);
});

app.mount("#app");



