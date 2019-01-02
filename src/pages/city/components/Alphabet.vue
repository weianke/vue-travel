<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :ref="item"
        :key="item" @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'CityAlaphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流函数 节省频繁点击造成的函数多次调用
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(touchY, index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
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
