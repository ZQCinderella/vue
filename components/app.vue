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
   
}
</script>

<style>

</style>
