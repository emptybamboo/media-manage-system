import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/enter',
    component: () => import('@/views/enter/Enter.vue'),
    children : [
      {
        path : "/",
        component: () => import('@/views/enter/Login.vue')
      },
    ]
  },
  //所有后台页面的路由
  {
    path: '/',
    component: () => import('@/views/Backstage.vue'),
    children : [
      {
        path : "/",
        component: () => import('@/views/Home.vue')
      },
      {
        path : "/staff",
        component: () => import('@/views/project/Staff.vue')
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
