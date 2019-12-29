import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BoostrapVue from 'bootstrap-vue'
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Header from './components/Header_footer/Header.vue';
import Footer from './components/Header_footer/Footer.vue';

Vue.component('app-header',Header)
Vue.component('app-footer',Footer)

Vue.use(VueRouter)
Vue.use(BoostrapVue)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// export const bus = new Vue();

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
}).$mount('#app')
