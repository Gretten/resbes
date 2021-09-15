import Vue from 'vue'
import Vuex from 'vuex'
import { authModule } from './authModule'
import { userModule } from './userModule'
import { listDataModule } from './listDataModule'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: userModule,
    list: listDataModule,
    auth: authModule,
  }
})

export default store;