import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mitt from 'mitt';
import p5 from 'p5';
const emitter = mitt();

// expose emitter to window
window.emitter = emitter;
window.p5 = p5;

createApp(App).use(store).use(router).mount("#app");
