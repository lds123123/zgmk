<template>
  <div class="msite">
    <!--头部-->
  <HeaderTop class="head" title="中国辅导费">
    <span class="header_search" slot="left">
       <i class="left">left</i>
    </span>
    <span class="header_search" slot="right">
       <i class="right">right</i>
    </span>
  </HeaderTop>
    <!--banneg-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./img/aqsc.png"/></div>
        <div class="swiper-slide"><img src="./img/aqsc.png"/></div>
        <div class="swiper-slide"><img src="./img/aqsc.png"/></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>


    </div>
    <!--列表-->
    <Shoplist></Shoplist>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  import HeaderTop from './../../components/HeaderTop/header'
  import Shoplist from './../../components/shoplist/shoplist'
    export default {
        name: "footerguide",
        mounted(){
          //创建轮播
          new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        },
        components:{
          HeaderTop,
          Shoplist
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

<style lang="stylus" rel="stylesheet/stylus">
  .left
    float left
    text-align center
    line-height 50px
  .right
    float right
    text-align center
    line-height 50px
</style>
