<template>
  <div class="cinema_body">
  	<ul>
  		<li v-for="item in cinemaList" :key="item.id">
  			<div>
  				<span>{{item.nm}}</span>
  				<span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
  			</div>
  			<div class="address">
  				<span>{{item.addr}}</span>
  				<span>{{item.distance}}</span>
  			</div>
  			<div class="card">
      			<div v-for="(val,key,i) in item.tag" v-if="val===1" :key="key" :class="key | colorTag">{{key | formateTag}}</div>
            <div v-for="(val,key,i) in item.tag.hallType">{{val}}</div>
  			</div>
  		</li>
  	</ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        list:[1,2,3,4,5,6,7],
        cinemaList:[]
      }
    },
    mounted(){
      this.$axios.get("api/cinemaList?cityId=10").then((res)=>{
        console.log(res.data)
        var msg = res.data.msg;
        if(msg){
          this.cinemaList = res.data.data.cinemas
        }
      })
    },
    filters:{
      formateTag(key){
        var tag = [
          {key:"allowRefund",value:"改签"},
          {key:"endorse",value:"签名"},
          {key:"sell",value:"买卖"},
          {key:"snack",value:"小吃"}
        ]
        for (var i in tag) {
          if(tag[i].key === key){
            return tag[i].value;
          }
        }
      },
      colorTag(key){
        var tag = [
          {key:"allowRefund",value:"or"},
          {key:"endorse",value:"or"},
          {key:"sell",value:"bl"},
          {key:"snack",value:"bl"}
        ]
        for (var i in tag) {
          if(tag[i].key === key){
            return tag[i].value;
          }
        }
      }
    }

  }
</script>

<style scoped="scoped">
  #content .cinema_body{ flex:1; overflow:auto;}
  .cinema_body ul{ padding:20px;}
  .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
  .cinema_body div{ margin-bottom: 10px;}
  .cinema_body .q{ font-size: 11px; color:#f03d37;float: right;}
  .cinema_body .price{ font-size: 18px;}
  .cinema_body .address{ font-size: 13px; color:#666;}
  .cinema_body .address span:nth-of-type(2){ float:right; }
  .cinema_body .card{ display: flex;}
  .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
  .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
  .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}

</style>
