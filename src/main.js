// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Paginate from 'vuejs-paginate'
import Thread from '@/components/Thread'

require('./assets/app.css')
Vue.config.productionTip = false

window.customEvents = new Vue() 

Vue.component('thread', Thread)
Vue.component('paginate', Paginate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})