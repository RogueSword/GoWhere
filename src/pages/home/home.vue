<template>
  <div>
    <home-header></home-header>
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
import {mapState} from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(res => {
          this.getHomeInfoSucc(res)
        })
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
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
    console.log('mounted')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 当页面重新被显示的时候，判断当前页面中的城市和目前的城市是否相同
    console.log('acitvated')
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
