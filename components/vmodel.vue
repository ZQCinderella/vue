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
    created() {
        console.log('router', this.$route.query)
    }
}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }
</style>
