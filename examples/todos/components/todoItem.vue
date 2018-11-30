<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input type="checkbox" class="toggle" :checked="todo.done" @change="toggleTodo(todo)">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input
      type="text"
      class="edit"
      v-show="editing"
      @focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
    >
  </li>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "todo-item",
  props: ["todo"],
  data() {
    return {
      editing: false
    };
  },
  methods: {
    ...mapActions(["toggleTodo", 'removeTodo']),
    doneEdit() {},
    cancelEdit(e) {
      e.target.value = this.todo.text;
      this.editing = false;
    }
  }
};
</script>

