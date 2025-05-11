import { createRouter, createWebHistory } from 'vue-router'

// 保留路由配置中的动态导入
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/LoginPage.vue')
  },
  // 主布局路由（独立路径）
  {
    path: '/main',
    component: () => import('@/components/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: { name: 'Page1' } // 默认重定向到page1
      },
      {
        path: 'page1',
        name: 'Page1',
        component: () => import('@/components/Page1.vue')
      },
      {
        path: 'page2', 
        name: 'Page2',
        component: () => import('@/components/Page2.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
