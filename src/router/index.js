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

const routes = [
  {
    path: '/',
    component: IndexPage,
    alias: '/share'
  },
  {
    path: '/share',
    name: '首页',
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
  {path:'/:pathMatch(.*)',name:'notfound',component:NotFound}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
