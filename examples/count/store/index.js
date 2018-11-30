import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  count: 0,
  history: []
}

// const getters = {
//   evenOrOdd: (state) => state.count % 2 === 0 ? 'even' : 'odd',
//   recentHistory: (state) => {
//     const len = state.history.length;
//     const begin = len - historyLimit < 0 ? 0 : len - historyLimit
//     return state.history.slice(begin, len).join(',')
//   }
// }

// const mutations = {
//   increment: (state) => {
//     state.count++
//     state.history.push('add')
//   },
//   decrement: (state) => {
//     state.count--
//     state.history.push('dec')
//   }
// }

// action不能直接修改state, 必须通过mutations
// const actions = {
//   increment: (ctx) => {
//     ctx.commit('increment')
//   },
//   decrement: (ctx) => {
//     ctx.commit('decrement')
//   },
//   addIfOdd: (ctx) => {
//     if ((ctx.state.count +1) % 2 === 0) {
//       ctx.commit('increment')
//     }
//   },
//   incrementAsync: ({ commit }) => {
//     setTimeout(() => {
//       commit('increment')
//     }, 1000)
//   }
// }

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

//store的热部署只能这样写
// if (module.hot) {
//   module.hot.accept([
//     './getters',
//     './actions',
//     './mutations'
//   ], function() {
//     // Do something with the updated library module...
//     store.hotUpdate({
//       getters: require('./getters'),
//       actions: require('./actions'),
//       mutations: require('./mutations')
//     })
//   });
// }

export default store