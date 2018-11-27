<template>
  <div>
    vue+vuex
    <div>count: {{ count }}</div>
    <button @click="operBtn('add')">add</button>
    <button @click="operBtn('sub')">sub</button>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapState({
      count: state => state.count
    })   // 当名称与state中属性名称相同是，可以直接传字符串
  },
  methods: {
    operBtn (type) {
      if (type === 'add') {
        this.$store.dispatch('incre', 1)
      } else {
        this.$store.dispatch('decre', 1)
      }
    }
  }
};
</script>


