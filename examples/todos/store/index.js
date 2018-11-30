import actions from './actions'
import { mutations, KEY } from './mutations'
import plugins from './plugins'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // todos: JSON.parse(window.localStorage.getItem(KEY) || '[]')
  todos: []
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  plugins
})

// if (module.hot) {
//   module.hot.accept([
//     './actions',
//     './mutations',
//     './plugins'
//   ], () => {
//     store.hotUpdate({
//       actions: require('./actions'),
//       mutations: require('./mutations'),
//       plugins: require('./plugins')
//     })
//   })
// }

export default store
