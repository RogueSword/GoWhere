<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <img class="icon-img-content" src="https://imgs.qunarzz.com/p/p43/1805/d4/f7e19f3966079d02.png" alt="">
      </div>
      <p class="icon-desc">境地那</p>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'HomeIcons',
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/variables'

  .icons
    width 100%
    height 0
    padding-bottom 50%
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      background-color pink
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom 0.44rem
        box-sizing border-box
        padding-bottom 0.1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute 
        left 0
        right 0
        bottom 0
        height 0.44rem
        line-height .44rem
        text-align center
        color $darkTextColor
</style>
