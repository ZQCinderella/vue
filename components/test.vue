<template>
    <div id="test">
        <!-- 假如路由是/test/name, 则params.pathMatch === /name -->
        这是测试组件，动态路由为{{$route.path}}, 匹配路由为{{$route.params.pathMatch}}
        <slot-com>
            <!-- 需要注意的是，插槽只能访问被调用组件，即父组件中的变量和方法 -->
            <div :slot="slotName">我是具名插槽, header: font-size:30px</div>
            <div>我是默认插槽 footer: font-size: 25px</div>
        </slot-com>
        <button @click="showModal">show modal</button>
    </div>
</template>
<script>
import slotCom from "./slot.vue"
    export default {
        data() {
            return {
                slotName: 'view-container'
            }
        },
        components: {
            slotCom
        },
        methods: {
            showModal() {
                // 使用开发的插件
                this.$modal({
                  title:'test',
                  confirmCb: (resolve) => {
                    setTimeout(() => {
                      resolve('1111111')
                    }, 1000)
                  }
                }).then(data => {
                  console.log(data)
                })
            }
        },
        activated() {
            console.log(this.$route.params)
        },
    }
</script>