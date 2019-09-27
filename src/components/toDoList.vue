<template>
  <div>
    <p>未完成<i>{{len}}</i></p>
    <ul>
      <li v-for="(i,index) in list" v-if="!i.tag">
        <input type="checkbox" v-model:checked="i.tag">
        {{i.val}}---
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
    <p>完成<i>{{len1}}</i></p>
    <ul>
      <li v-for="(i,index) in list" v-if="i.tag">
        <input type="checkbox" v-model:checked="i.tag">
        {{i.val}}---
         <button @click="remove(index)">删除</button>
      </li>
    </ul>
    <input type="text" v-model="inpVal"><button @click="add">添加</button>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        list:[
          {
            tag:true,
            val:'学习vue'
          }, {
            tag:false,
            val:'学习node.js'
          }
        ],
        inpVal:'',
        len:'',
        len1:''
      }
    },
    methods:{
      add(){
       this.list.push({
         tag:false,
         val:this.inpVal
       })
      },
      remove(index){
        this.list.splice(index,1)
      }
    },
    watch:{
      list:{
          handler(data) {
             this.len = data.filter(function(i){
                 return !i.tag
               }).length
             this.len1 = data.filter(function(i){
                 return i.tag
             }).length
          },
          deep: true,     //监听数据是否改变,不添加只会监听数组的增减
          immediate:true //首次加载执行
      }
    }
  }
</script>
<style>
</style>
