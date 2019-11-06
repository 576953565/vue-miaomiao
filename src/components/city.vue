<template>
<div class="city_body">
    <div class="city_list">
      <Loading v-if="isLoading"></Loading>
      <Scroller>
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <!-- tap事件是bscroll提供的 -->
              <li v-for="item in hotList" :key="item.id" @tap="handToCity(item.nm,item.id)">{{item.nm}}</li>
            </ul>
          </div>
          <div class="city_sort" ref="citySort">
            <div v-for="i in cityList" :key="i.index">
              <h2>{{i.index}}</h2>
              <ul>
                <li v-for="j in i.list" :key="j.id" @tap="handToCity(j.name,j.id)">{{j.name}}</li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>
    <div class="city_index">
      <ul>
        <li v-for="(i,index) in cityList" :key="i.index" @touchstart="handToIndex(index)">{{i.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    name:'City',
    data(){
      return {
       cityList:[],
       hotList:[],
       isLoading:true
      }
    },
    mounted(){
      var cityList =JSON.parse(localStorage.getItem("cityList"))
      var hotList =JSON.parse(localStorage.getItem("hotList"))
      if(cityList&&hotList){
        this.cityList = cityList;
        this.hotList = hotList;
        this.isLoading = false;
      }else{
        this.$axios.get('/api/cityList').then((res)=>{
          var msg = res.data.msg;
          if(msg==='ok'){
            this.isLoading = false;
            var citys = res.data.data.cities;
            var {cityList,hotList} = this.formatCitys(citys);
            console.log(cityList)
            console.log(hotList)
            this.cityList = cityList;
            this.hotList = hotList;
            localStorage.setItem("cityList",JSON.stringify(cityList));
            localStorage.setItem("hotList",JSON.stringify(hotList));
          }
        })
      }
    },
    methods:{
      //formatCitys方法将请求到数据格式化为
      // {
      //   [index:'a',list:[{name:'鞍山',id:'151'},{name:'鞍山',id:'151'}],
      //   [index:'b',list:[{name:'北京',id:'1'},{name:'保定',id:'87'}],
      //   ...
      //  }
      formatCitys(citys){
        var cityList = [];
        var hotList = [];
        for(var i in citys){
          if(citys[i].isHot === 1){
            hotList.push(citys[i])
          }
          var firstLetter = citys[i].py.substring(0,1).toUpperCase();
          if(toCom(firstLetter)){ //调用toCom方法判断城市的首字母firstLetter是否存在数组cityList
           //存在的话找到存在的那个对象，并且往改对象的list数组中追加改城市
            cityList[toCom(firstLetter)-1].list.push({
                name:citys[i].nm,
                id:citys[i].id
            })
          }else{
            //不存在就往城市列表cityList中追加改对象
            cityList.push({
              index:firstLetter,
              list:[{
                name:citys[i].nm,
                id:citys[i].id
              }]
            })
          }
        }
        //使用sort 给城市列表数组排序，使其按照字母前后顺序排序
        cityList.sort((n1,n2)=>{
          return n1.index.charCodeAt()-n2.index.charCodeAt()
        })
        //判断城市的首字母firstLetter是否存在数组cityList中
        function toCom(firstLetter){
          for (var i=0;i<cityList.length;i++) {
            if(cityList[i].index === firstLetter){
               return i+1 //+1防止i为0的时候if判断解析为false
            }
          }
          return false;
        }
       return {cityList,hotList}
      },
      handToIndex(index){
        console.log(this.$refs.citySort.parentNode)
        var h2 = this.$refs.citySort.getElementsByTagName('h2')[index];
        this.$refs.citySort.parentNode.parentNode.parentNode.scrollTop = h2.offsetTop
      },
      handToCity(nm,id){
        this.$store.commit('city/CITY_INFO',{nm,id})
        localStorage.setItem('cityNm',nm)
        localStorage.setItem('cityId',id)
        this.$router.push('/movie/nowPlaying')
      }
    }
  }
</script>

<style scoped>
  #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
  .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
  .city_body .city_list::-webkit-scrollbar{
      background-color:transparent;
      width:0;
  }
  .city_body .city_hot{ margin-top: 20px;}
  .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
  .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
  .city_body .city_sort div{ margin-top: 20px;}
  .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
  .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
  .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
  .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>
