export default {
  addTodo (ctx, text) {
    ctx.commit('addTodo', {
      text,
      done: false
    })
  },
  removeTodo ({ commit }, todo) {
    commit('removeTodo', todo)
  },
  editTodo ({ commit }, { todo, value }) {
    commit('editTodo', { todo, text: value})
  },
  toggleTodo (ctx, todo) {
    ctx.commit('editTodo', { todo, done: !todo.done})
  },
  toggleAll ({ commit, state}, done) {
    state.todos.forEach((item, index) => {
      commit('editTodo', { todo: item, done })
    })
  },
  clearCompleted ({ commit, state }) {
    // 删除的过程尽量生成新数组，而不是直接遍历原数组
    console.log(state.todos)
    /**
     * filter产生一个新数组，不受state.todos动态变化的影响
     */
    state.todos.filter( item => item.done ).forEach( (todo, index) => {
      console.log('clear', index)
      commit('removeTodo', todo)
    })
    /**
     * 直接forEach这种方式不行，因为你在修改的过程中todos的长度是改变的，假如有两个元素，那么你删除完一个之后，长度为1
     * 而for循环此时的下标也为1， 所以执行一次就终止了。
     */
    // state.todos.forEach((item, index) => {
    //   console.log('clear', index)
    //   if (item.done) {
    //     commit('removeTodo', item)
    //   }
    // })
  }
}