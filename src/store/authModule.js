export const authModule = {
    state: () => ({
        isAuth: false
    }),
    getters: {
        isUserAuth: state => state.isAuth,
    },
    mutations: {
        setAuth(state) {
            state.isAuth = true;
        },
        clearAuth(state) {
            state.isAuth = false;
        }
    },
}