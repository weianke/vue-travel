<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper ref="mySwiper"
              :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs"
                      :key="index">
          <img class="gallary-img"
               :src="item"
               alt="去哪儿玩">
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      // es6 箭头函数。没有参数或多个参数必须保留括号，此处return空数组
      default: () => []
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  top: 0
  right: 0
  bottom: 0
  background: #000
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 100%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
