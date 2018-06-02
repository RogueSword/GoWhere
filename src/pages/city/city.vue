<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>

</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/cityHeader'
import CitySearch from '@/pages/city/components/citySearch'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
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
