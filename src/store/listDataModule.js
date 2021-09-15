import authAdapter from '../api/Server/FakeDataAdapter/fakeDataAdapter'

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
            const data = await authAdapter.getObjects();
            commit('setListData', data)
          } catch(e) {
            console.log(e)
          }
        }
    },
}