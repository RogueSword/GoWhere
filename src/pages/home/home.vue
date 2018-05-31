<template>
  <div>
    <home-header></home-header>
    <Home-swiper></Home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/header'
import HomeSwiper from '@/pages/home/components/swiper'
import HomeIcons from '@/pages/home/components/Icons'

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
    HomeIcons
  }
}
</script>

<style>

</style>
