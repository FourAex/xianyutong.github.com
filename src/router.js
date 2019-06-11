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
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/register/index')
    },
    {
      path: '/accountDetails',
      name: 'accountDetails',
      meta: {
        footer: true
      },
      component: () => import(/* webpackChunkName: "accountDetails" */ './views/accountDetails/index')
    },
    {
      path: '/binding',
      name: 'binding',
      meta: {
        title: '绑定支付宝'
      },
      component: () => import(/* webpackChunkName: "binding" */ './views/binding/index')
    },
    {
      path: '/bindingResult',
      name: 'bindingResult',
      meta: {
        title: '绑定支付宝'
      },
      component: () => import(/* webpackChunkName: "bindingResult" */ './views/bindingResult/index')
    },
    {
      path: '/funds',
      name: 'funds',
      meta: {
        footer: true
      },
      component: () => import(/* webpackChunkName: "funds" */ './views/funds/index')
    },
    {
      path: '/balanceEnter',
      name: 'balanceEnter',
      meta: {
        title: '余额转入'
      },
      component: () => import(/* webpackChunkName: "balanceEnter" */ './views/balanceEnter/index')
    },
    {
      path: '/balanceOut',
      name: 'balanceOut',
      meta: {
        title: '余额转出'
      },
      component: () => import(/* webpackChunkName: "balanceOut" */ './views/balanceOut/index')
    },
    {
      path: '/bankCard',
      name: 'bankCard',
      meta: {
        title: '我的银行卡'
      },
      component: () => import(/* webpackChunkName: "bankCard" */ './views/bankCard/index')
    },
    {
      path: '/balanceResult',
      name: 'balanceResult',
      meta: {
        title: '申请完成'
      },
      component: () => import(/* webpackChunkName: "balanceResult" */ './views/balanceResult/index')
    },
  ]
})
