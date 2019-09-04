<template>
  <div id="main">
    <Header title = "喵喵电影"></Header>
    <TabBar></TabBar>
    <div>电影</div>
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
    }
  }
</script>

<style scoped="scoped">

</style>
