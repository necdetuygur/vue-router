import { createWebHistory, createRouter } from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/user/User'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user', component: User },
]

const router = createRouter({
  history: createWebHistory("vue-router"),
  routes: routes,
  mode: "hash"
})

export default router
