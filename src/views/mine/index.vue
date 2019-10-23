<template>
  <div id="main">
     <Header title="我的喵喵"></Header>
     <div id="content">
       <Login></Login>
     </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import TabBar from '@/components/tabBar.vue';
  import Login from '@/components/login.vue';
  export default {
    name:'mine',
    components:{
      Header,
      TabBar,
      Login
    }
  }
</script>

<style scoped="scoped">

</style>
