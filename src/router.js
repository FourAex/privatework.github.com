import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login/index')
    // },
    // {
    //   path: '/msg',
    //   name: 'msg',
    //   component: () => import(/* webpackChunkName: "login" */ './views/msg/index')
    }
  ]
})
