<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-incon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right" >{{city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/variables.styl'

  .header
    display flex
    hight $headerHeight
    background-color $bgColor
    color #ffffff
    .header-left
      width 0.64rem
      line-height $headerHeight
      float left
      .back-incon
        font-size .4rem
        text-align center
    .header-input
      flex 1
      margin-top .12rem
      margin-left .2rem
      padding-left .2rem
      height .64rem
      line-height .64rem
      line-height .64rem
      background-color #fff
      border-radius 0.1rem
      color #ccc
    .header-right
      width 1.24rem
      line-height $headerHeight
      float right
      text-align center
      color #fff
      .arrow-icon
        font-size .24rem
        margin-left -.04rem
</style>
