<template>
  <div>
    <city-header></city-header>
  </div>

</template>

<script>
import axios from 'axios'
import CityHeader from '@/pages/city/components/cityHeader'

export default {
  name: 'City',
  components: {
    CityHeader
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
