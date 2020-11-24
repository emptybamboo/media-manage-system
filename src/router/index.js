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
      {
        path : "register",
        component: () => import('@/views/enter/Register.vue')
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

//全局前置钩子
//模拟登陆,正式使用应该是先去异步取


//前置全局路由守卫
router.beforeEach((to,from,next)=>{
  let flag = localStorage.token;
  console.log("进入beforeEach");
  console.log(localStorage.token);
  console.log(to);
  console.log(to.name);
  console.log(from);
  console.log(flag);
  if(flag){
    if(to.path==='/enter'){
      next('/');
    }else{
      next();
    }
  }else{
    if(to.path==='/enter'||to.path==='/enter/register'){
      next();
    }else{
      next("/enter");
    }
  }
})

export default router
