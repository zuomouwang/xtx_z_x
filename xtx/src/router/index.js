import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Goods from '../views/GoodsCom.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: "/Home"
    },
    {
      path: '/Home',
      component: HomePage
    },
    {
      path: '/Goods/:id',
      component: Goods,
      props: true
    }
  ]
})

export default router
