import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import metricsStore from "./store/metrics-store";

const app = createApp(App);
app.use(metricsStore);
app.mount("#app");
