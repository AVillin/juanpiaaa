import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import classify from '../components/classify'
import shoppingcart from '../components/shoppingcart'
import my from '../components/my'
import drag from '../components/common/drag'
import menswear from '../components/common/menswear'
import baby from '../components/common/baby'
import shoe from '../components/common/shoe'
import bag from '../components/common/bag'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/home',
    	component:home
    },
    {
    	path:'/classify',
    	component:classify,
        children:[
            {
                path:'drag',
                component:drag
            },
            {
                path:'menswear',
                component:menswear
            },
            {
                path:'baby',
                component:baby
            },
            {
                path:'shoe',
                component:shoe
            },
            {
                path:'bag',
                component:bag
            },
            {
                path:"/classify",
                redirect:"/classify/drag"
            }
        ]
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
