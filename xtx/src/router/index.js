import { createRouter, createWebHashHistory } from 'vue-router'
import HomeCom from '../views/HomeCom.vue'
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
      component: HomeCom
    },
    {
      path: '/Goods/:id',
      component: Goods,
      props: true
    }
  ]
})

export default router
