import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/epg',
    name: 'EPG',
    component: () => import('@/views/EPG.vue')
  },
  {
    path: '/program-details',
    name: 'Program Details',
    component: () => import('@/views/ProgramDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
