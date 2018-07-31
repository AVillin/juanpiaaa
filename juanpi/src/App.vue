<template>
  <div id="app"> 
    <ul class="appul">
      <router-link to="/home" tag="li" activeClass="appul1">
        <i class="iconfont icon-home"></i>
      首页</router-link>
      <router-link to="/classify" tag="li" activeClass="appul1">
         <i class="iconfont icon-leimupinleifenleileibie"></i>
      分类</router-link>
      <router-link to="/shoppingcart" tag="li" activeClass="appul1">
         <i class="iconfont icon-gouwuche"></i>
        购物车</router-link>
      <router-link to="/my" tag="li" activeClass="appul1">
         <i class="iconfont icon-wodedangxuan1-copy"></i>

      我的</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
}
  .appul{
    display: flex;
    bottom:0;
    list-style: none;
    width:100%;
    position: fixed;
    font-size: 12px
    
  }
  li{
    width:25%;
    text-align: center;
    line-height: 50px;
    
  }
  .appul1{
    background: red;
    
    height: 50px;
  }
</style>
