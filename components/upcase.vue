<template>
  <div>
    welcome to uopcase
    <div @click="handleClick">{{ word | capitalize }}</div>
  </div>
</template>
<script>
  export default {
    // 对组件使用自定义指令时，需要在组件内部声明props和event, 然后通过$emit触发event，讲值映射到props上 然后组件使用部分的v-model的值也会修改，可以使用watch检测
    props: ['word'],
    model: {
      prop: 'word',
      event: 'change'
    },
    computed: {
      upcaseWord: function () {
        return this.word
      }
    },
    methods: {
      handleClick() {
        // 不能直接修改props的值 如 this.word = `fet-${Math.floor(Math.random() * 10)}`. 但可以使用计算属性去代替word
        // 如果组件绑定了自定义事件，也会加入到事件队列先行执行
        this.$emit('change', `fet-${Math.floor(Math.random() * 10)}`)
        console.log(this.word)  // 现在获取的还是未更新的word
        this.$nextTick(function () {
          console.log('----', this.word)
        })
      }
    },
    watch: {
      'word': function (val) {
        console.log(val)
        console.log('watch: ', this.upcaseWord) // 当word改变时，计算实现也会改变
      }
    },
    // 使用指令
    filters: {
      capitalize: function (value) {
        console.log('value', value)
        if (!value) return
        return value.toString().charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>
