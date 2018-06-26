import Vue from 'vue'
import Router from 'vue-router'
import cn from '@/components/cn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cn',
      component: cn
    }
  ]
})
