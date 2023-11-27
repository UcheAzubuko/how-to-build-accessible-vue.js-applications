import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { FocusTrap } from "focus-trap-vue";

const app = createApp(App);

app.component("FocusTrap", FocusTrap);

app.use(router);

app.mount("#app");
