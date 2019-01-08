<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/" tag="div">
           <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // document.documentElement 代表html节点
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 因为使用keep-alive缓存，页面显示就会触发这个钩子函数
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // 页面移除后，解绑全局scroll事件，以免引起其他组件的触发
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    text-align: center
    line-height: .8rem
    border-radius: .4rem
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    z-index: 20
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    font-size: .32rem
    background: $bgColor
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
</style>
