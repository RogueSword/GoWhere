<template>
  <div>
    <home-header></home-header>
    <Home-swiper></Home-swiper>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/header'
import HomeSwiper from '@/pages/home/components/swiper'

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
    HomeSwiper
  }
}
</script>

<style>

</style>
