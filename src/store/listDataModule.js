import mockDataAdapter from '../api/Server/MockDataAdapter/mockDataAdapter'

export const listDataModule = {
    state: () => ({
        listData: [],
    }),
    getters: {
        getListData: state => state.listData,
    },
    mutations: {
        setListData(state, payload) {
            state.listData = payload;
          },
    },
    actions: {
        async fetchListData({commit}) {
          try {
            const data = await mockDataAdapter.getObjects();
            commit('setListData', data)
          } catch(e) {
            console.log(e)
          }
        }
    },
}