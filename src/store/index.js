import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  // 键值对一样，直接保留键即可
  state,
  /* actions: {
    // 1. 组件调用action
    changeCity (ctx, city) {
      // 2. action调用mutation
      ctx.commit('changeCity', city)
    }
  }, */
  mutations,
  getters: {// 如果需要根据state中的数据组合成新的数据，则可以使用该属性
    doubleCity () {
      return state.city + '' + state.city
    }
  }
})
