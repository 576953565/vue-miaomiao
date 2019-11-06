<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
      props:{
        handleToScroll:{
          type:Function,
          default:function(){}
        },
        handleToTouchEnd:{
          type:Function,
          default:function(){}
        }
      },
      mounted(){
        var scroll = new BScroll(this.$refs.wrapper,{
          tap:true,
          probeType:2//在屏幕滑动的过程中实时的派发 scroll 事件
        });
        scroll.on('scroll',(pos)=>{
          this.handleToScroll(pos)
        });
        scroll.on('touchEnd',(pos)=>{
          this.handleToTouchEnd(pos)
        })
      }
    }
</script>

<style scoped="scoped">
  .wrapper{
    height: 100%;
  }
</style>
