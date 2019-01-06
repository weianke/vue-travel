<template>
  <div>
     <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/1507/d5/a9c70a3b26bd90e2e9274eae72ae6727.water.jpg_600x330_623dec1b.jpg" class="banner-img">
      <div class="banner-info">
        <div class="banner-tittle">九华山庄温泉主题公园</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe95b;</span>39</div>
      </div>
     </div>
     <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script  type='text/ecmascript-6'>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_r_800x800_6129f4dd.jpg', 'http://img1.qunarzz.com/sight/p0/1507/92/878bc1fd0e41d1eb1dd011b8cbdf60b7.water.jpg_r_800x800_d9c8595b.jpg'],
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
