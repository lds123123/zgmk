<template>

    <div>
        <nav-header></nav-header>
        <!--<nav-menu></nav-menu>-->
      <ul>
        <li v-for="(item,index) in goodliat">
          <img v-bind:src="'/static/'+item.prodcutImg" />
          <span>{{item.productName}}</span>
          <span>{{item.prodcutPrice}}</span>
          <span>{{item.productId}}</span>
        </li>
      </ul>
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide>
          <img src="../../static/aqsc.png"/>
        </swiper-slide>
        <swiper-slide v-for="(item,index) in banner">
          <img src="../../static/aqsc.png"/>
        </swiper-slide>
        <swiper-slide v-for="(item,index) in banner">
          <img src="../../static/aqsc.png"/>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
    </div>
</template>
<script>
  import Vue from 'vue'
  import navHeader from '../components/HeaderTop/header'
  import navMenu from './../components/navmenu'
  import axios from 'axios'
  Vue.prototype.$http = axios;
  //请求拦截
  //添加请求拦截器
  //全局拦截器

  export default {
    data(){
      return{
        goodliat:[],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false,
          loop: false,
          coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
          }
        },
        banner:[
          require('../../static/aqsc.png'),
          require('../../static/aqsc.png'),
          require('../../static/aqsc.png'),
          require('../../static/aqsc.png'),
          require('../../static/aqsc.png'),
        ]
      }
    },
    name: "goods",
    components:{
      navHeader:navHeader,
      navMenu:navMenu
    },
    mounted:function(){
      //请求前
      axios.interceptors.request.use(function(config){
        console.log('request init');
        return config
      })
      //请求后
      axios.interceptors.request.use(function(response){
        console.log('response init');
        return response
      })
    },
    mounted(){//生命周期一个初始化函数
      this.get()
    },
    methods:{
      get(){
        axios.get('http://localhost:8080/api').then((res)=>{
          this.goodliat = res;
        })
      }
    },

  }
</script>
<style scoped>
body{
  margin: 0;
}
</style>
