<template>
  <div class="test-div">
    vue+vuex
    <div>count: {{ count }}</div>
    <button @click="operBtn('add')">add</button>
    <button @click="operBtn('sub')">sub</button>
    <div class="test-bg"></div>
    <upcase></upcase>
    <SecondsOfCode></SecondsOfCode>
    <audio :src="audioSrc" controls="controls" preload="load" id="audioDom"></audio>
  </div>
</template>
<script>
import audioSrc from '../public/assets/yw.mp3'
import { mapState, mapGetters } from 'vuex'
import upcase from './upcase'
import SecondsOfCode from './30SecondsOfCode'
console.log('mp3', audioSrc)
export default {
  name: 'app',
  data () {
    return {
      audioSrc
    }
  },
  computed: {
    ...mapState({
      count: state => state.count
    })   // 当名称与state中属性名称相同是，可以直接传字符串
  },
  components: { 
    upcase,
    SecondsOfCode
  },
  methods: {
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
    }
  },
  mounted () {
    this.listenVisibility()
    setTimeout(function () {
      this.createEventFn()
    }.bind(this), 2000)
    document.addEventListener('testCreateEvent', function () {
      alert('It\'s work')
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



