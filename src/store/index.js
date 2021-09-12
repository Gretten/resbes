import Vue from 'vue'
import Vuex from 'vuex'

import adapter from '../api/Server/FakeDataAdapter/fakeDataAdapter'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuth: false,
    listData: [],
  },
  getters: {
    isUserAuth: state => state.isAuth,
    getListData: state => state.listData,
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
    async fetchListData({commit}) {
      try {
        const data = await adapter.getObjects();
        commit('setListData', data)
      } catch(e) {
        console.log(e)
      }
    }
  },
})

export default store;