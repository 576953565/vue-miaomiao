<template>
  <div id="main">
    <Header title = "喵喵电影"></Header>
    <TabBar></TabBar>
    <div>电影</div>
    <Todo></Todo>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import TabBar from '@/components/tabBar.vue';
  import Todo from '@/components/toDoList.vue'
  export default {
    name:'movie',
    components:{
      Header,
      TabBar,
      Todo
    }
  }
</script>

<style scoped="scoped">

</style>
