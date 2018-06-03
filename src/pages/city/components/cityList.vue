<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
        v-for="(item, key) of cities"
        :key='key'
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'CityList',
  props: {
    list: Object,
    letter: String
  },
  data () {
    return {
    }
  },
  methods: {
    handleCityClick (city) {
      // 1. 组件调用action
      // 1.1 由于不涉及异步操作，因此vuex步骤中可以省略action步骤
      // this.$store.dispatch('changeCity', city)
      // 使用了高逼格写法，淘汰该写法
      // this.$store.commit('changeCity', city)

      // vuex高逼格写法2：直接使用映射的changeCity方法，替代上一行的写法
      this.changeCity(city)
      // 路由跳转
      this.$router.push('/')
    },
    // vuex高逼格写法1：有一个mutation叫做changeCity,将mutation映射到组件中叫做changeCity的方法里面
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  computed: {
    cities () {
      return this.list.cities
    },
    hotCities () {
      return this.list.hotCities
    },
    // 将vuex的city映射到计算属性里面，属性的名字叫做currentCity
    ...mapState({
      'currentCity': 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const ndEle = this.$refs[this.letter][0]
        console.log(this.letter)
        this.scroll.scrollToElement(ndEle, 1000)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top 1.62rem
    left 0
    right 0
    bottom 0
  .title
    line-height .54rem
    background-color #eee
    padding-left .2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        text-align center
        border .02rem solid #ccc
        padding .1rem 0
        border-radius .06rem
  .item-list
    .item
      line-height .54rem
      color #666
      padding-left .2rem
</style>
