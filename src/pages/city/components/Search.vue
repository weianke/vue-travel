<template>
  <div>
    <div class="search">
        <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音">
      </div>
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
  </div>
</template>

<script  type='text/ecmascript-6'>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      // 节流优化
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      height: .62rem
      width: 100%
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    background: #eee
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .search-item
      line-height: 0.62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
