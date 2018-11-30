import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from './store/index.js'
import 'babel-polyfill'
import App from './components/index.vue'
import _ from 'lodash'

const test_val = 'test app.js'
console.log(test_val)
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
