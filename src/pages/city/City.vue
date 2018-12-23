<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script  type='text/ecmascript-6'>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>

</style>
