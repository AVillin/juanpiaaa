import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import classify from '../components/classify'
import shoppingcart from '../components/shoppingcart'
import my from '../components/my'

import detail from '../components/detail'


import my1 from "../components/my1"
import order from "../components/order"

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/home',
    	component:home
    },
    {
    	path:'/classify',
    	component:classify
    },
    {
    	path:'/shoppingcart',
    	component:shoppingcart
    },
    {
    	path:'/my',
    	component:my
    },
    {

        path:'/detail/:ddd',
        component:detail
    },
    {

        path:'/my1',
        component:my1
    },
    {
        path:'/order',
        component:order
    }
    // {
    //     path:'*',
    //     redirect:"/home"
    // }
  ]
})
