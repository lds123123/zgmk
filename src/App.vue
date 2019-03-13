<template>
  <div id="app">
    <router-view/>
   <ooter v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import ooter from './components/footerGuide/footerguide'
export default {
  components:{
    ooter
  }
}
</script>

<style>
  /*@import './assets/css/reset.css';*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<!--<style lang="stylus" rel="stylesheet/stylus">-->
  <!--.app-->
    <!--height 40px-->
<!--</style>-->
