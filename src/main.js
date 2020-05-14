import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbvue'
//import axios from 'axios'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
library.add(faFontAwesome)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./pages/login.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Principal.vue'),
      alias:'/Principal.html'
  },
  {
      path: '/service',
      name: 'Service',
      component: () => import('./pages/Service.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue')
  },
  {
    path: '*', 
    component: () => import('./components/NotFound.vue')
  }
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')