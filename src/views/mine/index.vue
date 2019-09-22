<template>
  <div id="main">
     <Header title="我的喵喵"></Header>
    <TabBar></TabBar>
    <div>我的喵喵</div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import TabBar from '@/components/tabBar.vue';
  export default {
    name:'mine',
    components:{
      Header,
      TabBar
    }
  }
</script>

<style scoped="scoped">

</style>
