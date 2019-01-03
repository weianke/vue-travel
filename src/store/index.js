import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
// 可以使用返回函数，通过es6包装为对象形式引入
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})
