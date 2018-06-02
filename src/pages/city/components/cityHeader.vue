<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont header-back">&#xe624;</div>
      </div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  components: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    font-size .32rem
    background-color $bgColor
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
      color #fff
</style>
