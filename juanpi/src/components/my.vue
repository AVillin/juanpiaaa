<template>

<div>
	<header>
		<div class="a">
			<i class="iconfont icon-zuojiantou"></i>
			<span>个人中心</span>
		</div>
		<div class="b">
			<router-link to="/reg" class="c">注册</router-link>
			<span>|</span>
			<router-link to="/login" class="d">登录</router-link>
		</div>
	</header>

	<div class="ding">
		<a href="" class="a1">我的订单</a>
		<a href="" class="a2">全部订单</a>
	</div>

	<div class="item">
		<ul>
			<li>
				<i class="iconfont icon-daifukuan"></i>
				<router-link to="" tag="a">
					
					待付款
				</router-link>
			</li>
			<li>
				<i class="iconfont icon-daichengtuan"></i>
				<router-link to="" tag="a">	
					待成团
				</router-link>
			</li>
			<li>
				<i class="iconfont icon-gerenzhongxindingdandaishouhuo"></i>
				<router-link to="" tag="a">
					
					待收货
				</router-link>
			</li>
			<li>
				<i class="iconfont icon-tuikuan"></i>
				<router-link to="" tag="a">
					
					售后/退款
				</router-link>
			</li>
		
		</ul>
	</div>

	<div class="my">
		<ul>
			<router-link to="" tag="li">我的优惠券</router-link>
			<router-link to="" tag="li">我的收藏</router-link>
			<router-link to="" tag="li">我的拼团</router-link>
			<router-link to="" tag="li" class="a">我的免单券
				<p>0张</p>
			</router-link>			
			<router-link to="" tag="li" class="b">借钱
				<p>新用户免费领1000元</p>			
			</router-link>
		</ul>
		
	</div>
	<div class="server">
		<p class="p1">客服中心</p>
		<p class="p2">关于卷皮</p>
	</div>

	<div class="footer">
		<router-link to="" tag="p">返回首页</router-link>
		<router-link to="" tag="p">客户端</router-link>
		<router-link to="" tag="p">电脑版</router-link>
	</div>
		
</div>
	
</template>

<script>
	export default{

	}
</script>

<style scoped>
	a{text-decoration: none;color:#fff;}
	li{list-style: none}
	html,body{height:100%;width:100%;}
	header{height:150px;width:100%;background:url(../assets/bg.png) no-repeat;background-size:cover;color:#fff;font-size:22px;box-sizing:border-box;}
	header .a{height:40%;width:100%;}
	header .a i{float: left;height:40px;line-height: 40px;}
	header .a span{width:90%;font-size:16px;text-align: center;float: left;height: 40px;line-height: 40px;}
	header .a .iconfont{font-size: 22px;padding-left: 10px}
	header .b{height:60%;width:100%;line-height:90px;text-align: center;display: flex;}
	header .b .c,.d{width:50%;text-align: center}
	
	.ding{border-bottom: 1px solid #ccc;}
	.ding a{display: inline-block;color:#000;line-height: 48px;padding-left:10px;box-sizing:border-box;}
	.ding .a2{position: absolute;right:10px;top: 150px;color:#999;}
	
	.item ul{display:flex;padding:10px;box-sizing:border-box;}
	.item ul a{color:#999;}
	.item{border-bottom: 8px solid #eee}
	
	.my{border-bottom: 8px solid #eee}
	.my>ul{display: flex;flex-direction:column;}
	.my>ul>.a,.b{display: flex}
	.my>ul>li{width:100%;text-align: left;line-height: 48px;padding-left: 10px;position: relative;border-bottom: 1px solid #ccc;box-sizing:border-box;}
	.my>ul>li>p{position:absolute;top:50%;right:10px; transform:translateY(-50%); color:#999;}

	.server p{line-height: 48px;box-sizing:border-box;padding-left: 10px;}
	.server .p1{border-bottom: 1px solid #ccc}
	.server .p2{border-bottom: 8px solid #eee}

	.footer{display:flex;overflow: hidden;margin-bottom: 50px}
	.footer p{flex:1;text-align: center}
</style>