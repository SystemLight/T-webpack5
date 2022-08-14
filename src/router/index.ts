import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/index.vue'
import Foo from '@/views/foo.vue'
import Bar from '@/views/bar.vue'
import Login from '@/views/login.vue'
import Code404 from '@/views/_errors/code-404.vue'
import Code500 from '@/views/_errors/code-500.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Foo',
      path: '/foo',
      component: Foo
    },
    {
      name: 'Bar',
      path: '/bar',
      component: Bar
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Code500',
      path: '/500',
      component: Code500
    },
    {
      name: 'Code404',
      path: '/404',
      component: Code404
    },
    {
      name: 'Code404',
      path: '/:pathMatch(.*)',
      component: Code404
    }
  ]
})

export default router
