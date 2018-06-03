<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: { // 基于插件swiper3.0的参数配置
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 底部分页的样式
        observer: true, // 只要监听父元素变化，就自我刷新一次。防止新进入页面时候，滚动异常
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    z-index 99
    display flex
    flex-direction column
    justify-content center
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    background-color #000
    .wrapper
      height 0
      width 100%
      padding-bottom 100%// 正方形
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
