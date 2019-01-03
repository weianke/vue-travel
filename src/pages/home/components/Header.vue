<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input" @click="handleCity">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city" tag="div">
      <div class="header-right">
        {{this.getChangeCity}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script  type='text/ecmascript-6'>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Header',
  methods: {
    handleCity () {
      this.$router.push('/city')
    }
  },
  computed: {
    changeCity () {
      return this.changeCity
    },
    ...mapGetters([
      'getChangeCity'
    ]),
    ...mapState([
      'city'
    ])
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~styles/varibles.styl'
  .header
    display: flex
    background: $bgColor
    line-height: $headerHeight
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      padding-left: .2rem
      margin-top: .12rem
      margin-left: .2rem
      height: .64rem
      line-height: .64rem
      background: #fff;
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      .arrow-icon
       margin-left: -.04rem
       font-size: .24rem
</style>
