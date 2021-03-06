import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import { Inkline } from "@inkline/inkline/src";
import * as components from "@inkline/inkline/src/components";
import "@inkline/inkline/src/inkline.scss";

Vue.use(Inkline, { components });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
