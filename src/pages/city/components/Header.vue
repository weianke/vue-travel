<template>
  <div class="header">
    城市选择
     <div class="iconfont header-back" @click="handleBack">&#xe624;</div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'CityHeader',
  methods: {
    handleBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    font-size: .32rem
    background: $bgColor
    .header-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
</style>
