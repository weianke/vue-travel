// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const FastClick = require('static/js/vedio-fastclick.js')
import 'videojs-contrib-hls'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
import 'styles/video.css'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueVideoPlayer)
FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.bus = new Vue()
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/image/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
