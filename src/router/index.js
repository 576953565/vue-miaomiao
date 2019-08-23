import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinema from './cinema'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes:[
    movieRouter,
    mineRouter,
    cinema
  ]
})
