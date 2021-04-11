import ProductAll from './components/product/ProductAll.vue'
import ProductById from './components/product/ProductById.vue'
import BasketQuantity from './components/product/BasketQuantity.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
// import LandingPage from './components/marketing/LandingPage'
import About from './components/marketing/About'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'


const routes = [
  {
    path: '/productall',
    name:'productall',
    component:ProductAll,
  },
  {
    path:'/product/:id',
    name:'productbyid',
    component:ProductById,
    props: true,
  },
  {
    path: '/product/qty',
    name:'productqty',
    component:BasketQuantity,
  },
  {
    path: '/',
    name: 'home',
    // component: LandingPage
  },
  {
    path: '/todo',
    name: 'todo',
    component: App,
    meta:{
      requiresAuth:true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      requiresVisitor:true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      requiresVisitor:true,
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  }
]

export default routes
