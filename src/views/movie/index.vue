<template>
  <div id="main">
    <Header title = "百万电影"></Header>
    <div id="content">
      <div class="movie_menu">
      	<router-link class="city_name" to="/movie/city">
      		<span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
      	</router-link>
      	<div class="hot_swtich">
      		<router-link class="hot_item" to="/movie/nowPlaying">正在热映</router-link>
      		<router-link class="hot_item" to="/movie/cominSoon">即将上映</router-link>
      	</div>
      	<div class="search_entry">
      		<router-link class="iconfont icon-sousuo" to="/movie/search"></router-link>
      	</div>
      </div>
      <keep-alive><!-- 用来对组件进行缓存,从而节省性能 -->
        <router-view></router-view>
      </keep-alive>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import TabBar from '@/components/tabBar.vue';
  export default {
    name:'movie',
    components:{
      Header,
      TabBar
    },
    mounted() {
      console.log(this.$store)
      this.$axios.get('api/getLocation').then((res)=>{
        if(res.data.msg==='ok'){
          var nm = res.data.data.nm;
          var id = res.data.data.id;
          console.log(this.$store.state.city.nm,nm)
          if(this.$store.state.city.nm == nm){
            return;
          }
          this.$messagebox.confirm(res.data.data.nm,"定位").then((action) => {
            if(action){
               this.$store.commit('city/CITY_INFO',{nm,id});
               localStorage.setItem('cityNm',nm)
               localStorage.setItem('cityId',id)
               window.location.reload()
            }else{
              console.log('取消')
            }

          })
        }
      })
      // this.$messagebox.confirm("深圳","定位").then((value,action) => {
      //   console.log("切换成功")
      // }).catch(err=>{
      //  console.log('取消成功')
      // });
    }
  }
</script>

<style scoped="scoped" lang="scss">
@import "@/style/public.scss";//组件内引用公共样式
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
a{ text-decoration: none;}
.movie_menu .router-link-active{color: #ef4238; border-bottom: 2px #ef4238 solid;text-decoration: none;}
</style>
