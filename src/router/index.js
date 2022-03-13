import { createRouter, createWebHashHistory } from 'vue-router'
import IndexPage from '../views/IndexPage.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import About2 from '../views/About2.vue'
import TestEditor from '../views/editor/TestEditor.vue'
import TestHttp from '../Test/TestHttp.vue'
import LoginIndex from '../views/login/LoginIndex.vue'
import LayoutWithLang from '../layout/LayoutWithLang.vue'
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
    path: '/share',
    name: 'share',
    component: IndexPage
  },
  {
    path: '/login',
    name: '登录',
    component: LoginIndex
  },
  {
    path:'/main',
    redirect:"/main/home",
    name:'内容',
    component:LayoutWithLang,
    children:[
      {
        path: '',
        redirect:"/main/home"
      },
      {
        path: 'home',
        name: '首页',
        component: Home
      },{
        path: 'about',
        name: '关于',
        component:About,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        children:[
          {path:'about2',name:'关于我',component:About2}
        ]
      },
      {
        path:'editor',
        name:'编辑器',
        component:TestEditor
      },
      {
        path:'testhttp',
        name:'测试http',
        component:TestHttp
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
const pubroutes=['index','share','登录','forbid','notfound']
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
