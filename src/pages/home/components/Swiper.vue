<template>
  <div class="wrapper">
      <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item in list" :key="item.id">
          <img class="swiper-img"  :src="item.imgUrl" alt="去哪儿玩">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'homeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.7%
    background: #eee
    .swiper-img
      width: 100%
</style>
