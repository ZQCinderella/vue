import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/index.js'
import store from './store/index.js'
import 'babel-polyfill'
import App from '@/components/app.vue'
import Modal from './plugin/modal'

Vue.use(Modal)

// 全局定义指令
Vue.directive('focus', {
  inserted: function (el) {
    console.log('el focus')
    el.focus()
  }
})
// 全局自定义过滤器
Vue.filter('uppercase', function(value){
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})
// 多个参数的过滤器
Vue.filter('prefix', function(value, prefix = '¥'){
  if (!value || typeof value !== "number") return ''
  return prefix + value
})

console.log('--------', router)

const inst = new Vue({
  // el: '#app',
  store,
  testProp: {name: 'fet'},   // 所有写在vue构造函数里的内容，都会被放到$options中
  render: h => h(App),
  router
}).$mount('#app')
console.log('config', inst.$options.testProp)
// 通过visibilityChange事件，控制页面内的内容播放和暂停


