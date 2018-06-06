<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/detailBanner'
import DetailHeader from '@/pages/detail/components/detailHeader'
import DetailList from '@/pages/detail/components/detailList'

export default {
  name: 'Detail',
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {
                  title: '承认三馆联票 - 某一连锁店销售'
                }
              ]
            },
            {
              title: '成人四馆联票'
            }
          ]
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
