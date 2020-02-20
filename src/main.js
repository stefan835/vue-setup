import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from "./router/index";
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify';

import "@/assets/sass/app.sass";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app');
