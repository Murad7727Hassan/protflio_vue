import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Posts from '../views/Posts.vue'
import Login from '../views/Login.vue'
import Dashborad from '../views/Dashborad.vue'
import SinglePost from "../components/SinglePost.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashborad',
      name: 'Dashborad',
      component: Dashborad
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/SinglePost/:id',
      name: 'SinglePost',
      component: SinglePost,
      props:true,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
