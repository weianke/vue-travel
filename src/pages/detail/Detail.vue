<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import Axios from '@/axios/index'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      lastId: ''
    }
  },
  mounted () {
    // 记录第一次进来的详情页id，只会执行一次，因为keep-alive的原因
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    // 第一次记录的id 是否和最新路由获取的id 一致
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  },
  methods: {
    getDetailInfo () {
      Axios.ajax('/detail', {
        data: {
          id: this.$route.params.id
        }
      }).then(res => {
        if (res.ret && res.data) {
          this.sightName = res.data.sightName
          this.list = res.data.categoryList
          this.bannerImg = res.data.bannerImg
          this.gallaryImgs = res.data.gallaryImgs
        }
      })
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.content
  height: 100vh
</style>
