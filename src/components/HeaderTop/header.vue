<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span>{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    props:{
      title : String
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    top-border-1px(#e4e4e4)
    height 50px
    background green
    color #ffffff
    font-size 20px
    .header_title
      width 200px
      text-align center
      line-height 50px

</style>
