import createLogger from 'vuex/dist/logger'
import { KEY } from './mutations'

// 插件接受唯一参数store, store的plugins选项暴露出每次mutation的的钩子
const localStoragePlugins = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem(KEY, JSON.stringify(state.todos))
  })
}
export default process.env.NODE_ENV === 'production' ?
  [localStoragePlugins] :
  [createLogger(), localStoragePlugins]