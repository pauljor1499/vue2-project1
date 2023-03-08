import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia, PiniaVuePlugin } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";

//pinia
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

//axios
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;
new Vue({
    router,
    vuetify,
    pinia,
    render: (h) => h(App),
}).$mount("#app");
