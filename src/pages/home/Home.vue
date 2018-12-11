<template>
  <div>
    <div class="home" @click="handleHref">Home</div>
    <router-link to="/list">列表页</router-link>
  </div>
</template>

<script  type='text/ecmascript-6'>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  font-size: 50px;
}
</style>
