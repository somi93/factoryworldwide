import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

import VueChartkick from 'vue-chartkick'
import Highcharts from 'highcharts'

Vue.use(VueChartkick, {adapter: Highcharts});

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
