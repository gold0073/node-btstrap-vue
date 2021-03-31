// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import axios from "axios";
import qs from "qs";

import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";

Vue.prototype.$axios = axios;

Vue.prototype.$microSeviceUrl = "http://127.0.0.1:8800";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
