<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" v-lazy="item.imgUrl" :alt="item.desc">
        <div class="item-info">
          <p class="item-tittle">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'homeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-tittle
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff8300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>
