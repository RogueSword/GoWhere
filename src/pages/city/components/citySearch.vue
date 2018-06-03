<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  computed: {
    // 根据搜索结果字符长度，判断是否显示结果dom元素
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 节流性能优化
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果关键字没有，清空页面
      if (!this.keyword) {
        this.list = []
        return
      }
      setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            // 页面查找的逻辑
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      box-sizing border-box
      padding 0 0.1rem
      color #666
      text-align center
      border-radius .06rem
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.62rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background-color #fff
</style>
