<template>
  <div class="header">
    城市选择
     <div class="iconfont header-back" @click="handleBack">&#xe624;</div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'CityHeader',
  props: {
    tittle: String
  },
  methods: {
    handleBack () {
      this.$router.push('/')
      // 双向数据绑定 通过语法糖实现子级传递 父级通过 .sync 实现自动更新子级传递的数据
      this.$emit('update:tittle', 'hello')
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
