<template>
    <div>
        <div class="show-btn" @click="showBtn">fade</div>
        <transition name="fade">
            <div class="tran-div" v-if="showTran">这里是过渡的动画</div>
        </transition>

        <div class="show-btn" @click="slideFade">slide-fade</div>
        <transition name="slide-fade">
            <div class="tran-div" v-show="showSlide">这里是slide-fade的动画</div>
        </transition>
        <!-- animation效果 -->
        <button @click="animationShow = !animationShow">toggle show</button>
        <transition name="bounce">
            <p class="animation-p" v-if="animationShow">
                这是进行animation的内容
            </p>
        </transition>

        <!-- 多个组件的trnasition: 原生标签  淡入淡出+绝对定位+滑动-->
        <div :style="{marginTop: '50px', paddingLeft: '200px', overflow: 'hidden'}" class="toggle-div">
            <p>淡入淡出+绝对定位+滑动</p>
            <transition name="toggle">
                <button v-if="docState" key="edit" @click="docState = !docState">on</button>
                <button v-else key="save" @click="docState = !docState">off</button>
            </transition>
        </div>
        <!-- 淡入淡出+绝对定位+滑动 + mode模式-->
        <div id="app3">
            <p>淡入淡出+绝对定位+滑动 + mode模式</p>
            <transition name="fade-slide" mode="in-out">
                <button v-if="on" key="on" @click="on = !on">
                    on
                </button>
                <button v-else key="off" @click="on = !on">
                    off
                </button>
            </transition>
        </div>

        <!-- 多个组件的过渡 -->
        <div id="app4">
            <label for="radio1">A</label>
            <input type="radio" id="radio1" value="c-a" v-model="view">
            <label for="radio2">B</label>
            <input type="radio" id="radio2" value="c-b" v-model="view">
            <transition name="com-tran" mode="out-in">
                <component :is="view"></component>
            </transition>
        </div>

        <!-- 列表的过渡效果 -->
        <div id="app5">
            <button @click="add">add</button>
            <button @click="remove">remove</button>
            <transition-group name="list" tag="p" class="p-list">
                <span v-for="i in items" :key="i" class="list-item">
                    {{i}}
                </span>
            </transition-group>
        </div>
        <div id="app6">
            <button @click="shuffle">shuffle</button>
            <button @click="add">add</button>
            <button @click="remove">remove</button>
            <transition-group name="flip-list" tag="ul" class="p-list">
                <li v-for="i in items" :key="i">
                    {{i}}
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
import comA from './comA.vue'
import comB from './comB.vue'
import { shuffle } from '../assets/util.js'
export default {
    data() {
        return {
            showTran: false,
            showSlide: false,
            animationShow: false,
            docState: true,
            btnArray: ['edit','save'],
            currentIndex: 0,
            on: true,
            view: 'c-a',
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10
        }
    },
    components: {
        'c-a': comA,
        'c-b': comB
    },
    methods: {
        showBtn() {
            this.showTran = !this.showTran
        },
        slideFade() {
            this.showSlide = !this.showSlide
        },
        randomIndex() {
            return Math.floor(Math.random() * this.items.length)
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)  // 如果第二个参数是0， 则不删除元素
        },
        remove() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle() {
            this.items = shuffle(this.items)
            console.log(this.items)
        }
    },
}
</script>

<style lang="scss">
.show-btn{
    display: inline-block;
    padding: 10px 15px;
    background: #40a9ff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}
.tran-div{
    width: 200px;
    height: 100px;
    background: #0f0;
    margin-top: 10px;
    position: relative;
}
// 使用了transition的dom, 都会自动在enter和leave时添加上以下类名。 transitionName-enter-active,transitionName-leave-active, transitionName-enter, transitionName-leave-to
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.slide-fade-enter-active{
    transition: all .5s ease;
}
.slide-fade-leave-active{
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
// 一个动画过程只要定义开始时的状态即enter和结束时的状态即 leave-to就定义了起始和终止的位置，然后中间的过程应用过渡即可
.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateX(50px);
    opacity: 0;
}

.animation-p{
    width: 200px;
    height: 50px;
    background: #0f0;
    margin-top: 10px;
    position: relative;
}
.bounce-enter-active{
    animation: bounce-in .5s;
}
.bounce-leave-active{
    animation: bounce-in .5s reverse;
}
@keyframes  bounce-in{
    0% {
        transform: scale(0)
    }
    50%{
        transform: scale(1.5)
    }
    100%{
        transform: scale(1)
    }
}
.toggle-div{
    button{
        position: absolute;
    }
    .toggle-enter-active, .toggle-leave-active{
        transition: all 1s;
    }
    .toggle-enter{
        opacity: 0;
        transform: translateX(30px);
    }
    .toggle-leave-active{
        opacity: 0;
        transform: translateX(-30px);
    }
} 
#app3 {
    margin-top: 50px;
    padding-left: 200px;
    overflow: hidden;
    button{
    position: absolute;
    //    left: 50%;
    //    top: 50%;
    }
    .fade-slide-enter-active,.fade-slide-leave-active{
    transition: all .5s
    }
    .fade-slide-enter{
    opacity: 0;
    transform: translateX(30px);
    }
    .fade-slide-leave-active{
    opacity: 0;
    transform: translateX(-30px);
    }   
}
.com-tran-enter-active, .com-tran-leave-active{
    transition: opacity .3s ease;
}
.com-tran-enter, .com-tran-leave-to{
    opacity: 0;
}
.p-list{
    transition: all 1s;
}
.list-item{
    display: inline-block;
    margin-right: 10px;
    transition: all 1s;
}
.list-enter-active, .list-leave-active{
    transition: all 1s;
}
.list-enter-to, .list-leave{
    opacity: 1;
}
.list-enter, .list-leave-to{
    opacity: 0;
    transform: translateY(30px);
}
.list-leave-active{
    position: absolute;   // 这个属性非常重要，在leave的时候如果不应用该属性，则该item周围的元素会瞬间移动到指定位置，而不是平滑过渡
}
.flip-list-move{
    transition: transform 1s;
}
</style>
