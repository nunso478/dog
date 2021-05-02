import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import breed from '../views/breed.vue'
import breeds from '../views/breeds.vue'
import fav from '../views/fav.vue'
import registar from '../views/registar.vue'
import login from '../views/login.vue'
import admin from '../views/admin.vue'

import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/breeds',
    component: breeds
  },
  {
    path: '/breeds/:id',
    component: breed
  },
  {
    path: '/fav',
    component: fav
  },
  {
    path: '/registar',
    component: registar
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/admin',
    component: admin,
    beforeEnter:(to,from,next) =>{
      if(!store.state.user){
        next('/login')
      }
      else{
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
