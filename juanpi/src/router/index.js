import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import classify from '../components/classify'
import shoppingcart from '../components/shoppingcart'
import my from '../components/my'

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
    }
  ]
})
