<template>
  <div>{{ 'name' | capitalize }}</div>
</template>
<script>
  export default {
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
