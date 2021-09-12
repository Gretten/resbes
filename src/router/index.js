import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const isAuth = store.getters.isUserAuth;

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('@/views/MainPage/MainPage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage/LoginPage.vue')
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('@/views/ProfilePage/ProfilePage.vue')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('@/views/RegisterPage/RegisterPage.vue')
  },
  {
    path: '/list',
    name: 'ListPage',
    component: () => import('@/views/ListPage/ListPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,

})

router.beforeEach(
    (to, from, next) => {
        if((to.name === 'ListPage' || to.name === 'ProfilePage') && !isAuth ) {
            console.log('hello')
            next('/')
        } else if(to.name === 'LoginPage' && isAuth) {
            next('/profile')
        } else {
            next()
        }
    }
)

export default router
