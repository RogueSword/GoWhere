<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
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
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(res => {
          this.handleGetCityInfoSucc(res)
        })
    },
    handleGetCityInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>

</style>
