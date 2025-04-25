import { createRouter, createWebHashHistory } from 'vue-router'
import { CONFIG } from '@/config/api.js'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {title: '首页'},
    component: () => import('@/views/layout/Index.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        meta: {title: '首页'},
        component: () => import('@/views/home/Home.vue'),
      },
      {
        path: '/vehicle',
        name: 'vehicle',
        meta: {title: '车辆列表'},
        component: () => import('@/views/vehicle/Vehicle.vue'),
      },
      {
        path: '/monitor',
        name: 'monitor',
        meta: {title: '电量监控'},
        component: () => import('@/views/vehicle/monitor/Monitor.vue'),
        children: [
          {
            path: 'charge',
            name: 'charge',
            meta: {title: '车辆充电'},
            component: () => import('@/views/vehicle/monitor/Charge.vue'),
          },
          {
            path: 'maintenance',
            name: 'maintenance',
            meta: {title: '车辆维保'},
            component: () => import('@/views/vehicle/monitor/Maintenance.vue'),
          },
          {
            path: 'order',
            name: 'order',
            meta: {title: '工单管理'},
            component: () => import('@/views/vehicle/monitor/Order.vue'),
          },
        ],
      },
      {
        path: '/maplocation',
        name: 'maplocation',
        meta: {title: '地图分布'},
        component: () => import('@/views/vehicle/Maplocation.vue'),
      },
      {
        path: '/census',
        name: 'census',
        meta: {title: '统计分析'},
        component: () => import('@/views/vehicle/Census.vue'),
      },
      // 权限管理
      {
        path: '/power',
        name: 'power',
        meta: {title: '权限管理'},
        component: () => import('@/views/vehicle/power/Power.vue'),
        children: [
          {
            path: 'addoperator',
            name: 'addoperator',
            meta: {title: '添加操作员'},
            component: () => import('@/views/vehicle/power/Addoperator.vue'),
          },
          {
            path: 'viewoperator',
            name: 'viewoperator',
            meta: {title: '操作员列表'},
            component: () => import('@/views/vehicle/power/Viewoperator.vue'),
          },
          {
            path: 'editoperator',
            name: 'editoperator',
            meta: {title: '操作员权限'},
            component: () => import('@/views/vehicle/power/Editoperator.vue'),
          },
        ],
      },
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
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
