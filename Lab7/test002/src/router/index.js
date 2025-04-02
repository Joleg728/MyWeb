import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/api1',
    name: 'api1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Api1View.vue')
  },
  {
    path: '/api2',
    name: 'api2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Api2View.vue')
  },
  {
    path: '/api3',
    name: 'api3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Api3View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
