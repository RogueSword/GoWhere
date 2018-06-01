<template>
  <div>
    <home-header></home-header>
    <Home-swiper></Home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/header'
import HomeSwiper from '@/pages/home/components/swiper'
import HomeIcons from '@/pages/home/components/icons'
import HomeRecommend from '@/pages/home/components/recommend'
import HomeWeekend from '@/pages/home/components/weekend'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
