import Vue from 'vue'
import VueRouter from 'vue-router'
import routeProtector from './router.config'
import { paths, names } from './router.constants'

Vue.use(VueRouter)

const { 
  MAIN, 
  LOGIN, 
  PROFILE, 
  REGISTER, 
  LIST 
} = paths;

const {
  REGISTER_PAGE,
  LOGIN_PAGE,
  LIST_PAGE,
  MAIN_PAGE,
  PROFILE_PAGE,
} = names;

const routes = [
  {
    path: MAIN,
    name: MAIN_PAGE,
    component: () => import('@/views/MainPage/MainPage.vue')
  },
  {
    path: LOGIN,
    name: LOGIN_PAGE,
    component: () => import('@/views/LoginPage/LoginPage.vue')
  },
  {
    path: PROFILE,
    name: PROFILE_PAGE,
    component: () => import('@/views/ProfilePage/ProfilePage.vue')
  },
  {
    path: REGISTER,
    name: REGISTER_PAGE,
    component: () => import('@/views/RegisterPage/RegisterPage.vue')
  },
  {
    path: LIST,
    name: LIST_PAGE,
    component: () => import('@/views/ListPage/ListPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach(routeProtector)

export default router
