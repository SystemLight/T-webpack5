import {createRouter, createWebHistory} from 'vue-router'

import Code404 from '@/views/_errors/code-404.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    // @auto-routes
    {
      name: 'Code404',
      path: '/:pathMatch(.*)',
      component: Code404
    }
  ]
})

export default router
