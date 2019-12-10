import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adContent:{},
  },
  mutations: {
    initadContent(state,val){
      state.adContent=val;
    }
  },
  actions: {
  },
  modules: {
  }
})
