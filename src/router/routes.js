/**
 * @file 路由表定义
 * @date 2016-11-12
 * @author TinySymphony (zjutiny@gmail.com)
 * @desc 引入其他页面级组件，可选择页面js懒加载（切换下方注释）
 * @name routes.js
 */

/* eslint-disable no-unused-vars */
import HomePage from '@pages/HomePage'
// const HomePage = resolve => require(['@pages/HomePage'], resolve)
import DetailPage from '@pages/DetailPage'
import PayPage from '@pages/PayPage'
import SuccessPage from '@pages/SuccessPage'
import AdminPage from '@pages/AdminPage'

export default [{
  path: '/',
  component: HomePage
}, {
  path: '/detail/:id',
  component: DetailPage
}, {
  path: '/pay/:id',
  component: PayPage
}, {
  path: '/success',
  component: SuccessPage
}, {
  path: '/admin',
  component: AdminPage
}]
