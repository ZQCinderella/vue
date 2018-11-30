<template>
  <div>
    Clicked {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button v-on:click="add">+</button>
    <button v-on:click="dec">-</button>
    <button @click="addIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>Recent History (last 5 entries): {{ recentHistory }}</div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      evenOrOdd: 'evenOrOdd',
      recentHistory: 'recentHistory'
    })
  },
  methods: {
    ...mapActions({
      add: 'increment',
      dec: 'decrement',
      addIfOdd: 'addIfOdd',
      incrementAsync: 'incrementAsync'
    })
  }
};
</script>

