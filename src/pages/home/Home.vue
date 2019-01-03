<template>
  <div class="list" ref="wrapper">
     <div class="wrapper">
        <Home-header></Home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
     </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import Axios from '@/axios/index'
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    getHomeInfo () {
      Axios('/index?city=' + this.city).then((res) => {
        if (res.ret && res.data) {
          this.swiperList = res.data.swiperList
          this.iconList = res.data.iconList
          this.recommendList = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      })
    }
  },
  activated () {
    // 页面重新被显示，会被执行这个钩子
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed: {
    ...mapState([
      'city'
    ])
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  .list
    overflow: hidden
    height: 100vh
</style>
