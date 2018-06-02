<template>
  <div>
    <home-header :city="city"></home-header>
    <Home-swiper :list="swiperList"></Home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/header'
import HomeSwiper from '@/pages/home/components/swiper'
import HomeIcons from '@/pages/home/components/icons'
import HomeRecommend from '@/pages/home/components/recommend'
import HomeWeekend from '@/pages/home/components/weekend'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(res => {
          this.getHomeInfoSucc(res)
        })
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted () {
    this.getHomeInfo()
  }

}
</script>

<style>

</style>
