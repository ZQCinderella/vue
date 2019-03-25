import Modal from '../components/modal'
const install = (Vue, options) => {
    // 创建一个modal的子类
    const T = Vue.extend(Modal)
    // 添加实例方法
    Vue.prototype.$modal = function (params = {}) {
        return new Promise((resolve, reject) => {
            let t = new T({
                el: document.createElement('div'),
                data() {
                    return {
                        title: params.title,
                        content: params.content,
                        // 可以继续传递button等
                        confirm: '确定',
                        cancel: false,
                        confirmCb: params.confirmCb,
                        cancelCb: params.cancelCb
                    }
                },
                methods: {
                    onConfirm (arg) {
                        // 回调函数中需要调用resolve, 这样，在modal的then中才能获取到异步请求的结果
                        this.confirmCb && this.confirmCb(resolve)
                        this.$destroy()
                        t.$el.remove()
                        t = null
                        // resolve(this.title)
                    },
                    onCancel(arg) {
                        this.cancelCb && this.confirmCb()
                        if (arg.target.className === 'modal-body') return;
                        this.$destroy()
                        console.log(t)
                        t.$el.remove()
                        t = null
                        resolve()
                    }
                },
            })
            document.body.appendChild(t.$el)
        })
    }

}
// vue插件需要提供一个公开的方法 install， 它的第一个参数是Vue构造器，第二个参数是可选选项
export default { install }