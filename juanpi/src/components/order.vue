<template>
	<div>
		<header>
			<i class="iconfont icon-zuojiantou"></i>
			<p>全部订单</p>
		</header>

		<nav>
			<router-link to="" activeClass="active">全部订单</router-link>
			<router-link to="" activeClass="active">待付款</router-link>
			<router-link to="" activeClass="active">待成团</router-link>
			<router-link to="" activeClass="active">待收货</router-link>
		</nav>
		
		<div class="main">
			<img src="../assets/order.png">
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style>
	a{text-decoration:none;color:#000;}
	header{position:fixed;top:0;left:0;font-size: 20px;display:flex;height:50px;box-sizing: border-box;width:100%;border-bottom: 1px solid #eee}
	header .iconfont{font-size: 20px;height:50px;line-height: 50px;padding-left: 10px;color:#999;}
	header>p{text-align: center;width:100%;line-height: 50px}

	nav{position:absolute;left:0;top:50px;display: flex;width:100%;box-sizing: border-box;}
	nav>a{display:block;line-height: 50px;flex:1;width:100%;padding-left: 15px}
	nav .active{border-bottom: 2px solid red;color:red;}

	.main{width:100%;height:400px;background: #f4f4f8;margin-top: 100px}
	.main img{width:150px;position:absolute;left:50%;top:150px;transform: translateX(-50%);}
</style>