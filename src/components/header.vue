<template>
  <header id="heade">
  	<h1>{{title}}</h1>
  </header>
</template>
<script>
  export default {
    name:'heade',
    props:{
      title:{
        type:String,
        default:'喵喵影院'
      }
    }
  }
</script>
<style scoped="scoped">
#heade{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#heade h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#heade i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
