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
    {
      path: '/userCenter',
      name: 'userCenter',
      meta: {
        footer: true
      },
      component: () => import(/* webpackChunkName: "userCenter" */ './views/userCenter/index')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于闲鱼通'
      },
      component: () => import(/* webpackChunkName: "about" */ './views/about/index')
    },
    {
      path: '/customerService',
      name: 'customerService',
      meta: {
        title: '联系客服'
      },
      component: () => import(/* webpackChunkName: "customerService" */ './views/customerService/index')
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      meta: {
        title: '修改密码'
      },
      component: () => import(/* webpackChunkName: "changePassword" */ './views/changePassword/index')
    },
    {
      path: '/orderList',
      name: 'orderList',
      meta: {
        title: '收单列表'
      },
      component: () => import(/* webpackChunkName: "orderList" */ './views/orderList/index')
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      meta: {
        title: '收单详情'
      },
      component: () => import(/* webpackChunkName: "orderDetails" */ './views/orderDetails/index')
    },
  ]
})
