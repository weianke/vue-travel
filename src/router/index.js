import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
const Home = (resolve) => {
  import('@/pages/home/Home').then((module) => {
    resolve(module)
  })
}

const City = (resolve) => {
  import('@/pages/city/City').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
