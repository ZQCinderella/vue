<template>
<div>
    <h1>welcome to vue</h1>
    <br>
    <keep-alive>
        <!-- 路由出口 -->
        <!-- 路由匹配的组件将被渲染到这里 -->
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
export default {
    testOptions: {age: 10},    // 可通过this.$options.testOptions访问
    created() {
        console.log(this)
    }
}
</script>

<style>

</style>
