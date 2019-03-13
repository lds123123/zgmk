import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import nav from '@/components/test'
import Miste from "../pages/Msite/Msite"
import Order from "../pages/Order/Order"
import Search from "../pages/Search/Search"
import profile from "../pages/Profile/Profile"
import loaging from '../pages/loaging/loaging'

import good from './../views/goods'
//声明使用router
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Miste',
      component: Miste,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Miste',
      name: 'Miste',
      component: Miste,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta:{
        showFooter:true
      }
    },
     {
      path: '/loaging',
      name: 'loaging',
      component: loaging
    }
  ]
})
