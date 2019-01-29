import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import store from './store/index.js'
import 'babel-polyfill'
import App from '@/components/index.vue'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// 通过visibilityChange事件，控制页面内的内容播放和暂停



