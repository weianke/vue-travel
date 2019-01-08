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

const Detail = (resolve) => {
  import('@/pages/detail/Detail').then((module) => {
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
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
