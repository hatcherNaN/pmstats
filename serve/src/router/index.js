import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from '../views/Chart.vue'
import Tm from '../views/Tm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chart',
    component: Chart
  },
  {
    // path: '/Tm',
    // name: 'Tm',
    // // route level code-splitting
    // // this generates a separate chunk (Tm.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "Tm" */ '../views/Tm.vue')
    path: '/Tm',
    name: 'Tm',
    component: Tm
  }
]

const router = new VueRouter({
  routes
})

export default router
