import { createRouter, createWebHashHistory } from 'vue-router'
import { CONFIG } from '@/config/api.js'

const routes = {
    path: '/home',
    name: 'home',
    component: () => import('@/views/layout/Index.vue'),
    children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/views/home/Home.vue'),
        },
        {
          path: '/vehicle',
          name: 'vehicle',
          component: () => import('@/views/vehicle/Vehicle.vue'),
        },
        {
          path: '/monitor',
          name: 'monitor',
          children: [
            {
              path: 'charge',
              name: 'charge',
              component: () => import('@/views/vehicle/Charge.vue'),
            },
            {
              path: 'maintenance',
              name: 'maintenance',
              component: () => import('@/views/vehicle/Maintenance.vue'),
            },
            {
              path: 'order',
              name: 'order',
              component: () => import('@/views/vehicle/Order.vue'),
            },
          ],
        },
        {
          path: '/maplocation',
          name: 'maplocation',
          component: () => import('@/views/vehicle/Maplocation.vue'),
        },
        {
          path: '/census',
          name: 'census',
          component: () => import('@/views/vehicle/Census.vue'),
        },
        // 权限管理
        {
          path: '/power',
          name: 'power',
          children: [
            {
              path: 'addoperator',
              name: 'addoperator',
              component: () => import('@/views/vehicle/Addoperator.vue'),
            },
            {
              path: 'viewoperator',
              name: 'viewoperator',
              component: () => import('@/views/vehicle/Viewoperator.vue'),
            },
            {
              path: 'editoperator',
              name: 'editoperator',
              component: () => import('@/views/vehicle/Editoperator.vue'),
            },
          ],
        },
    ]
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue'),
    },
    routes,
  ],
})

// 全局前置路由守卫
// router.beforeEach((to, from, next)=>{
//   const toLogin = to.path.indexOf('/login')
//   const tokenVal = window.localStorage.getItem(CONFIG.TOKEN_NAME)
//   if (toLogin == 0 && tokenVal){
//       next('/home')
//   }else if(toLogin == 0 && !tokenVal) {
//       next()
//   }else if( tokenVal ){
//       next()
//   }else {
//       next('/login')
//   }
// })

export default router
