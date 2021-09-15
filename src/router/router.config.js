import store from '../store/index.js'
import { paths, names } from './router.constants'
const { LOGIN_PAGE, PROFILE_PAGE, LIST_PAGE } = names;
const { LOGIN, PROFILE } = paths;
const routeProtector = (to, from, next) => {
    const isAuth = store.getters.isUserAuth;

    if((to.name === PROFILE_PAGE || to.name === LIST_PAGE) && !isAuth ) {
        next(LOGIN)
    } else if((to.name === LOGIN_PAGE) && isAuth) {
        next(PROFILE)
    } else {
        next()
    }
}

export default routeProtector;
