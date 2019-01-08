<template>
  <div>
     <div class="banner" @click="handleBannerClick">
      <img v-lazy="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-tittle">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe95b;</span>39</div>
      </div>
     </div>
     <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script  type='text/ecmascript-6'>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      .banner-tittle
        position: absolute
        bottom: .2rem
        left: .1rem
        font-size: .36rem
        padding: 0 .2rem
        z-index: 1
        text-shadow: 0 1px 2px rgba(0,0,0,0.70)
      .banner-number
        position: absolute
        left: .2rem
        bottom: .86rem
        text-align: center
        width: 1.2rem
        height: .4rem
        margin-top: .14rem
        line-height: .4rem
        border-radius: .2rem
        font-size: .24rem
        background: rgba(0, 0, 0, .5)
        .banner-icon
          font-size: .24rem
          margin-right: .1rem;
</style>
