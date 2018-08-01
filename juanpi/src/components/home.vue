<template>
	<div>

	<!--  搜索栏  -->
		<header id="header">
			<a href="" class="search">
				<i class="iconfont icon-search1"></i>
				<input type="text" placeholder="         搜索">
			</a>
				<i class="iconfont icon-search icon1"></i>
		</header>
		
	<!-- 轮播图   -->
		<swipe class="my-swipe">
		  <swipe-item class="slide1" v-for="data in slidelist" :key="data.id">
		  			<a href=""><img :src="data.pic" alt=""></a>
		  </swipe-item>
		</swipe>
	<!-- 导航栏 -->
	<ul id="mav">
		<li v-for="data in mavlist"><a href=""><img :src="data.child[0].pic" alt=""></a></li>
		
	</ul>
	<!-- 动态图 -->
	<div id="pic">
		<a href="">
			<img src="../assets/ban.gif" alt="">
		</a>
	</div>
	<!-- 口碑图片 -->
	<div id="good">
			<img src="../assets/koubei.png" alt="">
	</div>


	</div>
</template>


</script>
<script>
	import axios from "axios"
	require('vue-swipe/dist/vue-swipe.css');
	import { Swipe, SwipeItem } from 'vue-swipe';
	export default{
		name:"home",
		data(){
			return{
				slidelist:[],
				mavlist:[]
			}
		},
		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem
		},
		mounted(){
			axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c3_l4_1456_51_1391_1406_18_1371_1217_5_127_105&app_name=zhe&app_version=&platform=&catname=newest_zhe").then(res=>{
				console.log(res.data)
				this.slidelist=res.data.adsInfo.slide_ads.config.slide

			});
			axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_51_1406_18_1371_5_128&app_name=zhe&app_version=&platform=&catname=newest_zhe").then(res=>{
				console.log("模块",res.data)
				this.mavlist=res.data.adsInfo.block[0].multi_block[0].data


			})
		}
	}
	
	
</script>

<style scoped lang="scss">
	div{
		background: #eee
	}
#header{
	width: 100%;
	height: 36px;
	display: flex;
	margin-bottom: 5px;
	margin-top: 5px;
	.iconfont{
		font-size:23px;
		color: rgb(153, 153, 153);
		margin:2px;
	}
	a{
		text-decoration: none;
		margin-top: 3px;
		height: 30px;
		background: #f2f2f2;
		border-radius:5px;
		flex:70%;
		display: flex;
		margin:0px 10px;
		margin-top: 3px;
		input{
			flex:70%;
			background:#f2f2f2;
			border:0;
			margin-right: 3px;
			outline: none;
			background: url(../assets/juanpi.png) no-repeat 3px 8px;
			background-size: 22px;
			span{
				color: red
			}
			
		}
	}
	.icon1{
		margin-right: 10px;
		margin-top:5px;
		color:#000;
		font-size: 20px

	}
}
.my-swipe {
  height: 146px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  color: #fff;
  img{
  	width: 100%;
  }
}
#mav{
	width: 100%;
	display: flex;
	li{
		flex:1;
		list-style: none;
		width: 100%;
		a{	
			width: 100%;
			display: flex;
			flex-direction:column;
			justify-content:space-around;
			align-items:center;
			img{
				display: block;
				width: 100%;
		}
		}
		
	}

}
#pic{
	a{
		width: 100%;
		img{
			width: 100%;
		}
	}
}
#good{
	img{
		width: 100%;
		margin-top:5px;
		margin-bottom: 5px;
	}
}


	
</style>