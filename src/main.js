// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import api_ from './api'
import *as echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.api = api_
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

axios.defaults.baseURL = api_.baseURL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
