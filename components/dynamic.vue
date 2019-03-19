<template>
    <div>
        <div v-if="$route.params.num === 1">
            我是一号种子
        </div>
        <div v-else>
            我是{{$route.params.num}}号种子
        </div>
        <router-link to="/test/page">go to test component</router-link>
    </div>
</template>
<script>
    export default {
    
    }
</script>