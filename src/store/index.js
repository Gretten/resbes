import Vue from 'vue'
import Vuex from 'vuex'

import adapter from '../api/Server/FakeDataAdapter/fakeDataAdapter'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isAuth: false,
    listData: [],
    username: '',
  },
  getters: {
    isUserAuth: state => state.isAuth,
    getListData: state => state.listData,
    getUsername: state => state.username,
  },
  mutations: {
    setListData(state, payload) {
      state.listData = payload;
    },
    setAuth(state) {
      state.isAuth = true;
    },
    setUsername(state, payload) {
      state.username = payload;
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