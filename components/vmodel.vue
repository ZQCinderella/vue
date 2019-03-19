<template>
    <div>
        <h2>learn about v-model</h2>

        <!-- 文本 -->
        <p>Message is: {{message}}</p>
        <input v-model="message" placeholder="edit me" />

        <p>Multiline message is:</p>
        <p style="white-space: pre-line;">{{ textareaMsg }}</p>
        <textarea v-model="textareaMsg"></textarea>

        <!-- 复选框 -->
        <div>
            <!-- 单个复选框 -->
            <input type="checkbox" id="checkbox" v-model="checkboxValue">
            <label for="checkbox">{{checkboxValue}}</label>
        </div>
        <div>
            <!-- 多个复选框 -->
            <input type="checkbox" id="A" value="A" v-model="checkedWords">
            <label for="A">A</label>
            <input type="checkbox" id="B" value="B" v-model="checkedWords">
            <label for="B">B</label>
            <input type="checkbox" id="C" value="C" v-model="checkedWords">
            <label for="C">C</label>
            <span>checked words: {{ checkedWords }}</span>
        </div>

        <!-- 单选按钮 -->
        <div>
            <input type="radio" value="one" id="radio1" v-model="radioValue">
            <label for="radio1">one</label>
            <input type="radio" value="two" id="radio2" v-model="radioValue">
            <label for="radio2">two</label>
            <span>picked: {{ radioValue }}</span>
        </div>

        <!-- 选择框 -->
        <div>
            <select name="" id="" v-model="selectedValue">
                <option value="" disabled>请选择</option>
                <option value="北京">北京</option>
                <option value="上海">上海</option>
                <option value="天津">天津</option>
            </select>
            <span>selected value: {{ selectedValue }}</span>
        </div>
        <div>
            <select name="" multiple v-model="multSelectArray">
                <option value="" disabled>请选择</option>
                <option>北京</option>
                <option>上海</option>
                <option>天津</option>
            </select>
            <span>selected value: {{ multSelectArray }}</span>
        </div>

        <!-- 使用v-for渲染 -->
        <div>
            <select name="" id="" v-model="vforSelected">
                <option value="" disabled>请选择</option>
                <!-- value的值可是是一个object -->
                <option v-for="item in options" :value="item" :key="item.text">
                    {{ item.text }}
                </option>
            </select>
            <span>vforSelected: {{ vforSelected }}</span>
        </div>

        <!-- lazy属性 -->
        <div>
            <input type="text" name="" id="" v-model.lazy.number.trim="lazyValue">
            <span>vmodel.lazy在change事件时触发: {{ lazyValue }}</span>
        </div>
        <router-link to="/vmodel/upcase">upcase</router-link>
        <router-link to="/dynamic/1">go to dynamic</router-link>
        <div @click="goDynamicComponent">点击我也可以去dynamic component</div>
        <keep-alive>
            <!-- 嵌套路由 -->
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'vmodel',
    data() {
        return {
            message: '',
            textareaMsg: '',
            checkboxValue: false,
            checkedWords: [],
            radioValue: '',
            selectedValue: '',
            multSelectArray: [],
            vforSelected: '',
            options: [
                {
                    text: 'one', value: 'A'
                },
                {
                    text: 'two', value: 'B'
                },
                {
                    text: 'three', value: 'C'
                }
            ],
            lazyValue: ''
        }
    },
    watch: {
        'vforSelected': function () {
            console.log(this.vforSelected.value)
        },
        '$route': function (to, from) {
            console.log('router from to:', from, to)
        }
    },
    methods: {
        goDynamicComponent() {
            // 如果提供了path， 那么params会被忽略，如果想使用params，需要手动书写完整路由 /dynamic/2
            // this.$router.push({path: '/dynamic', params: {num: 2}})
            this.$router.push({name: 'dynamic', params: {num: 2}})
        }
    },
    created() {
        console.log(this.$route) // 指当前路由，包括path, query, params等
        console.log(this.$router) // 指路由器，这个就是为了避免在每个组件内部都import进来router对象，所以通过new Vue({router})挂在了实例上
    },
    activated() {
        // 当组件被keep-alive包裹时， 再次展示该组件时会触发该方法
        console.log('params', this.$route.params)
    },
}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
</style>
