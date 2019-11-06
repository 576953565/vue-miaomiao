<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"></Loading>
    <Scroller :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li class="loding">{{pullDownMsg}}</li>
        <li v-for="item in nowPlayingList" :key="item.id">
          <div class="pic_show" @tap="handleToDetail"><img :src="item.img | wh(180,200)"></div>
          <div class="info_list">
            <h2>{{item.nm}}</h2>
            <p>观众评 <span class="grade">{{item.sc}}</span><span　class="card" v-if="item.globalReleased">{{item.globalReleased | fromateCar}}</span></p>
            <p>主演: {{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div class="btn_mall">
            购票
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        nowPlayingList:[],
        pullDownMsg:'',
        isLoading:true,
        prevCiteyId:-1
      }
    },
    activated(){
      var cityId = this.$store.state.city.id;
      if(this.prevCiteyId === cityId){
        return;
      }
      this.isLoading = true;
      this.$axios.get("api/movieOnInfoList?cityId="+cityId).then((res)=>{
        var msg = res.data.msg;
        if(msg === "ok"){
          this.prevCiteyId = cityId
          this.isLoading = false;
          this.nowPlayingList = res.data.data.movieList;
        }
      })
    },
    filters:{
      wh(src,w,h){//过滤链接里面的w.h
        var src = src.replace(/w\.h/,w+"."+h);
        return src
      },
      fromateCar(is){
         return "全球上映"
      }
    },
    methods:{
      handleToDetail(){
        console.log("跳转")
      },
      handleToScroll(pos){
        if(pos.y>30){
            this.pullDownMsg = "正在加载..."
          }
      },
      handleToTouchEnd(pos){
        if(pos.y>30){
          this.pullDownMsg = "加载成功"
          setTimeout(()=>{
            this.pullDownMsg = ""
          },1000)
        }
      }
    }

  }
</script>

<style>
  #content .movie_body{ flex:1; overflow:auto;}
  .movie_body ul{ margin:0 12px; overflow: hidden;}
  .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
  .movie_body .pic_show{ width:64px; height: 90px;}
  .movie_body .pic_show img{ width:100%;}
  .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
  .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
  .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
  .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
  .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
  .movie_body .info_list .card{padding: 0 3px;margin:0 0 0 10px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
  .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
  .movie_body .btn_pre{ background-color: #3c9fe6;}
  .movie_body ul .loding{text-align: center!important;padding: 0;margin: 0;border: none;display: block;}
</style>
