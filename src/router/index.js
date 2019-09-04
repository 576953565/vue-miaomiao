import Vue from 'vue'
import Router from 'vue-router'
//单独写路由文件引入
import movieRouter from './movie'
import mineRouter from './mine'
import cinema from './cinema'
//引入组件，然后在写路由
import movie from '@/views/movie'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/movie',
      component:movie
    },
    {
      path:'/mine',
      component:()=>import('@/views/mine')  //写路由的同时引入组件
    },
    {
      path:'/cinema',
      component:()=>import('@/views/cinema')
    }
    // movieRouter,
    // mineRouter,
    // cinema
  ]
})
