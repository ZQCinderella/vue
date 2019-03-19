<template>
    <div>
        <!-- 假如路由是/test/name, 则params.pathMatch === /name -->
        这是测试组件，动态路由为{{$route.path}}, 匹配路由为{{$route.params.pathMatch}}
    </div>
</template>
<script>
    export default {
        activated() {
            console.log(this.$route.params)
        },
    }
</script>