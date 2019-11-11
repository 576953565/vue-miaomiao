import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes:[
    {
      path:'/movie',
      redirect:'/movie/nowPlaying',
      component:()=>import('@/views/movie'),
      children:[
        {
          path:'city',
          component:()=>import('@/components/city.vue')
        },
        {
          path:'nowPlaying',
          component:()=>import('@/components/nowPlaying.vue')
        },
        {
          path:'cominSoon',
          component:()=>import('@/components/cominSoon.vue')
        },
        {
          path:'search',
          component:()=>import('@/components/search.vue')
        }
      ]
    },
    {
      path:'/mine',
      component:()=>import('@/views/mine')
    },
    {
      path:'/cinema',
      component:()=>import('@/views/cinema')
    },
    {
      path: '*',//设置默认路由
      redirect: '/movie'
    }
  ]
})
