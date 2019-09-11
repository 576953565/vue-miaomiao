<template>
  <div id="main">
     <Header title="喵喵影院1"></Header>
    <TabBar></TabBar>
    <div>{{key}}</div>
  </div>
</template>

<script>
  import Header from '@/components/header.vue';
  import TabBar from '@/components/tabBar.vue';
  export default {
    name:'cinema',
    data() {
      return {
        key: '影院'
      }
    },
    components:{
      Header,
      TabBar
    }
  }
</script>

<style scoped="scoped">

</style>
