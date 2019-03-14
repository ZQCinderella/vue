<template>
  <div class="test-div">
    vue+vuex
    <div>count: {{ count }}</div>
    <button @click="operBtn('add')">add</button>
    <button @click="operBtn('sub')">sub</button>
    <div class="test-bg" ref="testBg"></div>
    <input v-focus placeholder="这是一个自动聚焦的input" v-model="demoMsg"/>
    <div v-demo="demoMsg"></div>
    <upcase @change="testChange" v-model="demoMsg"></upcase>
    <upcase @change="testChange222" v-model="demoMsg"></upcase>

    <!-- <SecondsOfCode></SecondsOfCode> -->
    <Algorithm></Algorithm>
    <audio :src="audioSrc" controls="controls" preload="load" id="audioDom"></audio>
  </div>
</template>
<script>
import audioSrc from '../public/assets/yw.mp3'
import { mapState, mapGetters } from 'vuex'
import upcase from './upcase'
import SecondsOfCode from './30SecondsOfCode'
import Algorithm from './Algorithm'
console.log('mp3', audioSrc)
export default {
  name: 'app',
  data () {
    return {
      demoMsg: 'before',
      audioSrc,
    }
  },
  watch: {
    'demoMsg': function (val, oldValue) {
      // this.inputAction()
      this.inputAction2()
    }
  },
  computed: {
    ...mapState({
      count: state => state.count
    })   // 当名称与state中属性名称相同是，可以直接传字符串
  },
  components: { 
    upcase,
    SecondsOfCode,
    Algorithm
  },
  directives: {
    // 添加局部指令的方式
    focus: {
      inserted: function (el) {
        el.focus() 
      }
    },
    demo: {
      update: function (el, binding) {
        el.innerHTML = binding.value
      }
    }
  },
  methods: {
    sendRequest () {
      console.log('我正在发信息')
    },
    testChange() {
      console.log('++++++++++++++++')
    },
    testChange222() {
      console.log('00000000000000000')
    },
    // 去抖
    requestDebounce (method, delay) {
      let timer = null
      return function () {
        let context = this, args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
          method.call(context, args)
        }, delay)
      }
    },
    // 节流
    requestThrottle (method, duration) {
      let begin = new Date()
      return function () {
        let context = this, args = arguments, current = new Date()
        if (current - begin >= duration) {
          method.call(context, args)
          begin = current
        }
      }
    },
    operBtn (type) {
      if (type === 'add') {
        this.$store.dispatch('incre', 1)
      } else {
        this.$store.dispatch('decre', 1)
      }
    },
    listenVisibility () {
      let hidden, visibilityChange
      if (typeof document.hidden !== 'undefined' ) {
        hidden = 'hidden'
        visibilityChange = 'visibilitychange'
      } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden'
        visibilityChange = 'msvisibilitychange'
      } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden'
        visibilityChange = 'webkitvisibilitychange'
      }
      if (typeof document.addEventListener === 'undefined' || typeof document.hidden === 'undefined') {
        console.log('This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.')
      } else {
        let self = this, audio = document.getElementById('audioDom')
        document.addEventListener('visibilitychange', function () {
          if (document[hidden]) {
            audio.pause()
          } else {
            audio.play()
          }
        }, false)
        audio.addEventListener('pause', function () {
          document.title = 'Paused'
        })
        audio.addEventListener('play', function () {
          document.title = 'Playing'
        })
      }
    },
    createEventFn () {
      // 测试自定义事件
      let event = document.createEvent('Events')
      event.initEvent('testCreateEvent')
      document.dispatchEvent(event)
    },

  },
  created() {
    this.inputAction = this.requestDebounce(this.sendRequest, 1000)
    this.inputAction2 = this.requestThrottle(this.sendRequest, 1000)
    console.log('created', this.$refs.testBg)

    setTimeout(() => {
      console.log('宏任务1')
       Promise.resolve().then(() => {
        console.log('微任务3')
      })
    }, 0)
    setTimeout(() => {
      console.log('宏任务2')
    }, 0)
    Promise.resolve().then(() => {
      console.log('微任务1')
    }).then(() => {
      console.log('微任务2')
    })
    console.log(this)
  },
  mounted () {
    // render function执行好， mounted生命周期函数被调用，但是页面并没有展示出来还
    this.listenVisibility()
    setTimeout(function () {
      this.createEventFn()
    }.bind(this), 2000)
    document.addEventListener('testCreateEvent', function () {
      console.log('It\'s work')
    })
  }
}
</script>
<style lang="scss">
.test-div {
  font-size: 40px;
  button {
    width: 80px;
    height: 40px;
    color: #fff;
    font-size: 20px;
    background: #0f2283;
    &:hover {
      background: #333;
      width: 60px;
      height: 35px;
      transition: all .5s ease;
    }
  }
  .test-bg {
    width: 640px;
    height: 480px;
    background: url('bg.jpg')
  }
}
</style>



