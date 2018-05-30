<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: '0001',
          imgUrl: 'https://img1.qunarzz.com/vc/c1/c3/4f/7cd9da5aadf1c5b15cdbe11424.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://img1.qunarzz.com/vc/ba/f3/09/bb1aa2d86b3b29b1feddcd840c.jpg'
        },
        {
          id: '0003',
          imgUrl: 'https://img1.qunarzz.com/vc/f4/c6/76/050213a01e4da3696f91a9fca5.jpg'
        },
        {
          id: '0004',
          imgUrl: 'https://img1.qunarzz.com/vc/6a/36/df/4415fc5ed7c08d33649807f321.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    background #eee
    // height 31.25vw
    .swiper-img
      width 100%
</style>
