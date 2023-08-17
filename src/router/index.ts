import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../components/pokemon-main.vue')
  },
  {
    path: '/:pokemonName',
    name: 'pokemonDetail',
    component: () => import( '../components/pokemon-detail/pokemon-detail.vue'),
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
