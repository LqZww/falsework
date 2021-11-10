import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决重复点击路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((error) => error);
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/features/404'], resolve),
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/features/401'], resolve),
  },




  {
    path: "*",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
