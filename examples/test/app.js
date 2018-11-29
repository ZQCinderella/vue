import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from './store/index.js'
import 'babel-polyfill'
import App from './components/index.vue'
console.log('test app.js')
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
