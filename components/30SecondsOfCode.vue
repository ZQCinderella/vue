<template>
  <div>30 seconds of code</div>
</template>
<script>
  export default {
    name: 'secondsOfCode',
    data () {
      return {}
    },
    methods: {
      adapterAry () {
        return  (fn, n) => (...args) => {
          console.log('args:', args)
          return fn(...args.slice(0, n))
        }
      },
      all: (arr, fn = Boolean) => arr.every(fn), // 与every相对的就是some
      allEqual: (arr) => arr.every( x => x === arr[0]),
      // 将二维数组转换为用逗号分割，并且每排一个换行符
      arrayToCSV: (arr, delimiter = ',') => arr.map(x => x.map(v => `"${v}"`).join(delimiter)).join('\n'),
      // [1,2,3]['map'](x => x * 2) 通过给定的方法和上下文，来调用对应的方法
      call: (key, ...args) => {
        console.log('call args:', args)
        return context => {
          console.log('context', context)
          return context[key](...args)
        }
      },
      collectInto: fn => (...args) => fn(args),
      // flip函数反转第一个参数到最后一个
      flip: fn => (first, ...args) => fn(...args, first)
    },
    mounted () {
      /* method 1 start */
      const firstTwoMax = this.adapterAry()(Math.max, 2)
      const m1 = [[2,6,'a'], [8,4,6], [10]].map(x => firstTwoMax(...x))
      console.log('m1:', m1) // [6,8,10]

      /* method 2 start */
      console.log(this.all)
      console.log(this.all([4,2,3], x => x > 1)) // true
      console.log(this.all([4,2,3])) // true
      console.log(this.all([], x => x > 2)) // true 对于空数组，任何情况下调用every都会返回true

      /* method 3 start */
      console.log(this.allEqual([1,2,3,4,5,6])) // false
      console.log(this.allEqual([1,1,1,1,1,1])) // true

      /* method 4 start */
      console.log(this.arrayToCSV([['a', 'b', 'c'], ['d', 'e', 'f']]))
      // "a","b","c"
      // "d","e","f"
      console.log(this.arrayToCSV([['a', 'b', 'c'], ['d', 'e', 'f']], ';'))
      // "a";"b";"c"
      // "d";"e";"f"

      /* method 5 start */
       Promise.resolve([1,2,3]).then(this.call('map', x => x*2)).then(console.log) // [2,4,6]
       // 等同于
       const map = this.call.bind(null, 'map')
       Promise.resolve([1,2,3]).then(map(x => x*2)).then(console.log) // [2,4,6]

       /* method 6 start */
       const pall = this.collectInto(Promise.all.bind(Promise)) // 绑定all方法的执行上下文
       let p1 = Promise.resolve(1)
       let p2 = Promise.resolve(2)
       let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3))
       pall(p1, p2, p3).then(console.log) // 两秒后输出 [1,2,3]

       /* method 7 start */
       let a7 = { name: 'John Smith' }
       let b = {}
       const mergeFrom = this.flip(Object.assign)
       let mergePerson = mergeFrom.bind(null, a7)
       console.log(mergePerson(b)) // 相当于Object.assign(b, a)   { name: 'John Smith'}
       console.log(b)
    }
  }
</script>
