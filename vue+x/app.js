import Vue from 'vue'
import store from './store/index.js'
import 'babel-polyfill'
import App from '@/components/index.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
