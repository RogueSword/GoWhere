<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :list="cityList"
      :letter="letter"
    >
    </city-list>
    <city-alphabet :list="cityList" @change="handleLetterChange"></city-alphabet>
  </div>

</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/cityHeader'
import CitySearch from '@/pages/city/components/citySearch'
import CityList from '@/pages/city/components/cityList'
import CityAlphabet from '@/pages/city/components/cityAlphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cityList: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        // .then(res => {
        //   this.handleGetCityInfoSucc(res)
        // })
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cityList = res.data
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>

</style>
