import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import About2 from '../views/About2.vue'
import TestEditor from '../views/editor/TestEditor.vue'

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/about',
    name: '关于',
    component:About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {path:'/about2',name:'关于我',component:About2}
    ]
  },
  {
    path:'/editor',
    name:'编辑器',
    component:TestEditor
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
