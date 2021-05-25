// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'                   // api: https://github.com/vuejs/vuex
import '@/assets/scss/main.scss'

import VueCookie from 'vue-cookie'            // api: https://github.com/alfhen/vue-cookie


import '@/element-ui'                         // api: https://github.com/ElemeFE/element
import httpRequest from '@/utils/httpRequest' // api: https://github.com/axios/axios
Vue.prototype.$http = httpRequest // ajax请求方法


Vue.config.productionTip = false
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
