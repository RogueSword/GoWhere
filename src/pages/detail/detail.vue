<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
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
import axios from 'axios'

export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      lastId: '',
      id: ''
    }
  },
  methods: {
    getDetailInfo () {
      // 基础版本的写法
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      console.log('res')
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    // this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    // this.id = this.$route.params.id
    // if (this.lastId !== this.id) {
    //   this.getDetailInfo()
    //   this.lastId = this.id
    // }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
