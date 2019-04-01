<template>
    <div>
        modelValue: {{ modelValue }}
        <vue-class-com title="use-vue-class" v-model="modelValue"></vue-class-com>
    </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VueClassCom from './VueClassComponent.vue'

@Component({
    components: {
        VueClassCom
    }
})
export default class FatherCom extends Vue {
    modelValue = 'father time' + Date.now()
}
</script>

<style>

</style>
