<template>
  <div class="list">
    <ul>
      <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CityAlphabet',
  props: {
    list: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // updated使用原因
  // 初始时，cities是个空对象，alphabet为空，不渲染。当获取ajax之后，该组件渲染。此时则为updated
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 思路
      // 1. 根据实时鼠标距离顶部的距离与首字母距离做差值，除以每个字母的高度值，得到实时鼠标所指字母的index，从而得到字母值
      // 2. 子组件1通信父组件，父组件，通信字组件2，传入变化的letter值
      // 3. 字组件2监听变化的letter值，获取dom节点，执行滚动事件
      // 注意考虑数据的节流处理
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.startY
          // 顶部header的高度79px
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    cities () {
      return this.list.cities
    },
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
