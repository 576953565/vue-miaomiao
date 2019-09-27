<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <TabBar></TabBar>
    <div @click="questData">{{key}}</div>
    <router-link to="/cinema/son1">1</router-link>
    <router-link to="/cinema/son2">2</router-link>
    <router-link to="/cinema/son3">3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import TabBar from '@/components/tabBar.vue';
  export default {
    name:'cinema',
    data() {
      return {
        key: '影院内容',
      }
    },
    components:{
      Header,
      TabBar
    },
    methods:{
      questData(){
        let api ='https://www.apiopen.top/journalismApi';
        this.$http.get(api,{params:{page:'1'}}).then(function(res){
            // this.list = res.body.data

            console.log(res)
        },function(err){
            console.log(err)
        })
      }
    }


  }
</script>

<style scoped="scoped">

</style>
