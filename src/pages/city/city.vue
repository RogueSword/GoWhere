<template>
  
</template>

<script>
import  axios from 'axios'

export default {
  name: 'City',
  components: {

  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      console.log(res)
    }
  }
}
</script>

<style>

</style>
