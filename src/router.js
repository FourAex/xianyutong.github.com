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
      component: () => import(/* webpackChunkName: "about" */ './views/login/index')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register/index')
    },
    {
      path: '/accountDetails',
      name: 'accountDetails',
      component: () => import(/* webpackChunkName: "about" */ './views/accountDetails/index')
    },
    {
      path: '/binding',
      name: 'binding',
      component: () => import(/* webpackChunkName: "about" */ './views/binding/index')
    },
    {
      path: '/bindingResult',
      name: 'bindingResult',
      component: () => import(/* webpackChunkName: "about" */ './views/bindingResult/index')
    },
  ]
})
