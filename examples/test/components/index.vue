<template>
  <div class="test-div">
    vue+vuex
    <div>count: {{ count }}</div>
    <button @click="operBtn('add')">add</button>
    <button @click="operBtn('sub')">sub</button>
    <div class="test-bg"></div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
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
}
</script>
<style lang="scss">
.test-div {
  font-size: 40px;
  button {
    width: 80px;
    height: 40px;
    color: #fff;
    font-size: 20px;
    background: #0f2283;
    &:hover {
      background: #333;
      width: 60px;
      height: 35px;
      transition: all .5s ease;
    }
  }
  .test-bg {
    width: 640px;
    height: 480px;
    background: url('bg.jpg')
  }
}
</style>



