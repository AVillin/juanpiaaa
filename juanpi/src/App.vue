<template>
  <div id="app"> 
    <router-view></router-view>
    <ul class="appul">
      <router-link to="/home" tag="li" activeClass="appul1">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
    </router-link>
      <router-link to="/classify" tag="li" activeClass="appul1">
         <i class="iconfont icon-leimupinleifenleileibie"></i>
      <span>分类</span>
    </router-link>
      <router-link to="/shoppingcart" tag="li" activeClass="appul1">
         <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
        </router-link>
      <router-link to="/my" tag="li" activeClass="appul1">
         <i class="iconfont icon-wodedangxuan1-copy"></i>
          <span>我的</span>
        </router-link>
    </ul>
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
  input{
    outline: none
  }
  .appul{
    display: flex;
    bottom:0px;
    list-style: none;
    width:100%;
    position: fixed;
    font-size: 12px;
    color:#ccc
  }
  li{
    width:25%;
    text-align: center;
    .iconfont{
      font-size: 25px;
      display: block;
      margin-top: 5px
    }
    span{
    display: block;
    line-height:20px;
    color:#000
  }
  }
  .appul1{
    color:red;    
    height: 50px;
    span{
      color:red
    }
  }

</style>
