import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
//import Home from '../views/Home.vue'
//import About from '../views/About.vue'
//import About2 from '../views/About2.vue'
//import TestEditor from '../views/editor/TestEditor.vue'
//import TestHttp from '../Test/TestHttp.vue'
import LayoutWithLang from '../layout/LayoutWithLang.vue'
import LoginIndex from '../views/login/LoginIndex.vue'
import NotFound from '../views/NotFound.vue'
import Result403 from '../views/Result403.vue'

const routes = [
  {
    path: '/',
    name:'index',
    component: IndexPage,
    alias: '/share'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginIndex
  },
  {
    path:'/main',
    name:'main',
    redirect:"/main/home",
    component:LayoutWithLang,
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        //component: Home
      },{
        path: 'about',
        name: 'about',
        //component:About,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        children:[
          {
            path:'about2',
            name:'about2',
            component: () => import(/* webpackChunkName: "about" */ '../views/About2.vue'),
            //component:About2
          }
        ]
      },
      {
        path:'editor',
        name:'editor',
        component: () => import(/* webpackChunkName: "about" */ '../views/editor/TestEditor.vue'),
        //component:TestEditor
      },
      {
        path:'testhttp',
        name:'testhttp',
        component: () => import(/* webpackChunkName: "about" */ '../Test/TestHttp.vue'),
        //component:TestHttp
      }
    ]
  },
  {
    path:'/forbid',name:'forbid',component:Result403
  },
  {path:'/:pathMatch(.*)',name:'notfound',component:NotFound}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const pubroutes=['index','login','forbid','notfound']
router.beforeEach((to)=>{
  if(pubroutes.includes(to.name)){
    return true
  }
  if(window.sessionStorage.getItem('token')){
    return true;
  }else{
    return {name: 'forbid',replace: true}
  }
})
export default router
