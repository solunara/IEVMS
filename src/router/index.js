import { createRouter, createWebHashHistory } from 'vue-router'
import { CONFIG } from '@/config/api.js'

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
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/layout/Index.vue'),
    },
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
