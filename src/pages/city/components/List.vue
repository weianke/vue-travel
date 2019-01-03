<template>
  <div class="list" ref="wrapper">
    <div class="wrapper">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.getChangeCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleCityClick (city) {
      // actions映射提交
      this.changeCity(city)
      // mutations映射this.add()提交
      // this.add(city)
      this.$router.push('/')
    },
    ...mapActions([
      'changeCity'
    ]),
    ...mapMutations({
      add: 'changeCity'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapGetters([
      'getChangeCity'
    ]),
    ...mapState({
      newCity: 'city'
    })
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
@import '~styles/varibles.styl'

.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .button-list
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    overflow: hidden
    .button-wrapper
      float: left
      width: 33.33%
      .button
        text-align: center
        padding: 0.1rem 0
        margin: 0.1rem
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
