import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes:[
    {
      path:'/movie',
      component:()=>import('@/views/movie')
    },
    {
      path:'/mine',
      component:()=>import('@/views/mine')
    },
    {
      path:'/cinema',
      component:()=>import('@/views/cinema'),
      children:[
        {
          path:'son1',
          component:()=>import('@/views/cinema/childrens/son1.vue')
        },
        {
          path:'son2',
          component:()=>import('@/views/cinema/childrens/son2.vue')
        },
        {
          path:'son3',
          component:()=>import('@/views/cinema/childrens/son3.vue')
        }
      ]
    },
    {
      path: '*',//设置默认路由
      redirect: '/movie'
    }
  ]
})
