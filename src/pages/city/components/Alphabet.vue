<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities"
        :key="key" @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{key}}</li>
  </ul>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'CityAlaphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {

    },
    handleTouchMove () {

    },
    handleTouchEnd () {

    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    @import '~styles/varibles.styl'
    .list
      display: flex
      flex-direction: column
      justify-content: center
      position: absolute
      top: 1.58rem
      right: 0
      bottom: 0
      width: .4rem
      .item
        line-height: .4rem
        text-align: center
        color: $bgColor
</style>
