import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuth: false,
    listData: [],
  },
  getters: {
    isUserAuth: state => {
      return state.isAuth;
    },
    getListData: state => {
      return state.listData;
    }
  },
  mutations: {
    setListData(state, payload) {
      state.listData = payload;
    },
    setAuth(state) {
      state.isAuth = true;
    },
    clearAuth(state) {
      state.isAuth = false;
    }
  },
  actions: {
    async fetchListData({commit}, payload) {
      commit('setListData', payload)
    }
  },
})

export default store;