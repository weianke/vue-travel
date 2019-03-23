<template>
  <div>
    <city-header :tittle.sync="tittle"></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
               :hot="hotCities"
               :letter="letter"></city-list>
    <city-alphabet :cities="cities"
                   @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script  type='text/ecmascript-6'>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import Axios from '@/axios/index'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      test: '你好',
      tittle: '111'
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '城市选择服务'
    next()
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      Axios.ajax('/city').then((res) => {
        if (res.ret && res.data) {
          this.cities = res.data.cities
          this.hotCities = res.data.hotCities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
</style>
