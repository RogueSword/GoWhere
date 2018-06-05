<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/detailBanner'
import DetailHeader from '@/pages/detail/components/detailHeader'

export default {
  name: 'Detail',
  data () {
    return {
    }
  },
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
