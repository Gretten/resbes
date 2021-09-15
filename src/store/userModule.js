export const userModule = {
    state: () => ({
        username: '',
    }),
    getters: {
        getUsername: state => state.username,
    },
    mutations: {
        setUsername(state, payload) {
            state.username = payload;
          },
          clearUsername(state) {
            state.username = ''
          },      
    },
}