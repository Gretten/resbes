import store from '../store/index.js'

const routeProtector = (to, from, next) => {
    const isAuth = store.getters.isUserAuth;

    if((to.name === 'ListPage' || to.name === 'ProfilePage') && !isAuth ) {
        next('/login')
    } else if(to.name === 'LoginPage' && isAuth) {
        next('/profile')
    } else {
        next()
    }
}

export default routeProtector;
