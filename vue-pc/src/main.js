import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// element
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element);

// js-cookie
import Cookies from 'js-cookie'

// normalize.css
import 'normalize.css/normalize.css'

// icon
import './icons'
// icon-class 为 icon 的名字; class-name 为 icon 自定义 class
// <svg-icon icon-class="password"  class-name='custom-class' />

// vue-meta
import Meta from 'vue-meta'
Vue.use(Meta)

// flexible.js
import '@/assets/js/flexible.js'

// global css
import '@/styles/index.scss'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
