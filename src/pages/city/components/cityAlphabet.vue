<template>
  <div class="list">
    <ul>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'CityAlphabet',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width 0.4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
