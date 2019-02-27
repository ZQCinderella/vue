<template>
</template>
<script>
export default {
  name: 'sort',
  data () {
    return {}
  },
  methods: {
    sourceTree () {
      // 原始数据
      let arr = [
        {id: 1, name: '中国', parentId: 0}, 
        {id: 4, name: '朝阳区', parentId: 2},
        {id: 2, name: '北京', parentId: 1}, 
        {id: 3, name: '上海', parentId: 1}, 
      ]
      // 输出结果
      let out = {
        id: 1, 
        name: '中国', 
        parentId: 0, 
        children: [
          {
            id: 2, 
            name: '北京', 
            parentId: 1, 
            children: [{id: 4, name: '朝阳区', parentId: 2, children: []}
          ]}, 
          {
            id: 3, 
            name: '上海', 
            parentId: 1, 
            children: []
          }
        ]
      }

      function sourceTree (arr) {
        let parentIdTree = {}, idTree = {}
        for (let i = 0; i < arr.length; i++) {
          let item = arr[i]
          if (!item.children) item.children = []
          idTree[item.id] = item
          if (!parentIdTree[item.parentId]) parentIdTree[item.parentId] = []
          parentIdTree[item.parentId].push(item)
          if (idTree[item.parentId]) {
            idTree[item.parentId].children.push(item)
          }
          if (parentIdTree[item.id]) {
            item.children.push(parentIdTree[item.id])
          }
        }
        return idTree[1]
      }
      console.log(sourceTree(arr))
    },
    // 按数组中元素的个位数数字排序
    lastNumberSort () {
      let arr = [29, 36, 47, 58, 65, 74, 85]
        , map = {}
        , output = []
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
          , lastNumber = arr[i] % 10
        if (!map[lastNumber]) map[lastNumber] = []
        map[lastNumber].push(item)
      }
      for (let p in map) {
        output = output.concat(map[p])
      }
      console.log('个位数排序结果', output)
    },
    fibonacci (n) {
      // 求斐波那契额数列的第n个输的值
      if (n === 0) return 0
      if (n === 1) return 1
      return this.fibonacci(n-1) + this.fibonacci(n-2)
    }
  },
  mounted () {
    this.lastNumberSort()
    console.log('斐波那契数列第5项的值为', this.fibonacci(5))
  }
}
</script>
