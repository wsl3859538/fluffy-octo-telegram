import Vue from 'vue'
import Router from 'vue-router'



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)



const _import = require('./import-' + process.env.NODE_ENV);

// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [
  { path: '/login', component: _import('common/login'), name: 'login', meta: { title: '登录' } }

]


// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/',
  component: _import('module/main'),
  name: 'main',
  redirect:'/home',
  // redirect: { name: 'home' },
  meta: { title: '主入口整体布局' },
  children: [
    { path: '/home', component: _import('module/platform/home'), name: 'home', meta: { title: '首页' } },
  ],
  beforeEnter(to, from, next) {
    let token = Vue.cookie.get('token')
    if (!token || !/\S/.test(token)) {
      next({ name: 'login' })
    }
    next()
  }
}


const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: globalRoutes.concat(mainRoutes)
})

console.log(router)

export default router