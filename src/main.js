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

Vue.use(VueRouter)
Vue.use(BoostrapVue)
Vue.use(axios, VueAxios)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app')
