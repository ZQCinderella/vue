<template>
    <div>
      使用vue-class-component和vue-property-decorator
      <!-- <div>Father title prop: {{ title }}</div> -->
      <div>pageName: {{ pageName  }}</div>
      <div>输入数字: </div>
      <input type="text" v-model="testProp">
      <div>{{ getTestProp }}</div>
      <!-- <div>v-model-value: {{ modelValue }}</div> -->
      <button @click="showInfo">change page name</button>
    </div>
</template>
<script>
import Vue from 'vue'
// vue-class-component, vue-property-decorator还是给ts用的
import { Component, Prop, Watch, Model } from 'vue-property-decorator'
@Component({})
export default class VueClass extends Vue {
  @Prop({
    type: string,
    default: 'no title',
    required: false
  }) title

  // v-model的使用方式
  @Model('changeModelValue', {
    type: string
  })  modelValue


  pageName = 'vue-property-decorator'  // 原来vue组件的data方法中属性的声明方式
  testProp = ''

  ChannelModelValue () {
    this.$emit('changeModelValue', 'now time: ' + Date.now())
  }
  // 监听器
  @Watch('pageName')
  showChangedInfo (newValue, oldValue) {
    this.ChannelModelValue()
    console.log('newValue', newValue, 'oldValue', oldValue)
  }

  // computed
  get getTestProp () {
    if (this.testProp) {
      return '您输入的数字为: ' + this.testProp
    }
  }

  showInfo () {
    this.pageName = 'vue-class-component'
  }
  mounted () {

  }
}
</script>
<style lang="scss">
</style>
