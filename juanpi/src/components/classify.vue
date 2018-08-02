<template>
	<div>
		<div id="search-box">
			<span><i class="iconfont icon-gouwuche"></i></span>
			<input type="text" name="keyword" placeholder="搜索商品">
		</div>
		
		<ul>
			<router-link to="/classify/drag" tag="li" activeClass="active">女装</router-link>
			<router-link to="/classify/menswear" tag="li" activeClass="active">男装</router-link>
			<router-link to="/classify/baby" tag="li" activeClass="active">母婴</router-link>
			<router-link to="/classify/shoe" tag="li" activeClass="active">鞋子</router-link>
			<router-link to="/classify/bag" tag="li" activeClass="active">箱包</router-link>
			
		</ul>
		<!-- <sidebar></sidebar> -->
		<section>
			<router-view></router-view>
		</section>
			



	</div>
</template>

<script>

// import sidebar from "./common/sidebar"
// import mainbar from "./common/mainbar"
	export default{
		data(){
			return{

			}
		}
		// components:{
		// 	sidebar,
		// 	mainbar
		// }
	}
</script>

<style scoped lang="sass">
	nav{width: 100%; position: fixed; left: 0; top: 0;}
	#search-box{height: 30px; line-height: 30px; margin: 10px; border: 1px solid #ccc; color: #ccc;}
	#search-box span i{font-size: 20px; padding: 5px;}
	#search-box input{outline: none; border:none;}


	ul{position: fixed; top: 55px; left: 0; width: 25%; background-color: #f9f9f9;}
	li{width: 80%; height: 30px; line-height: 30px; text-align: left; border-bottom: 1px solid #f4f4f4; padding: 10px;}
	.active{color: #f00; border-left: 2px solid #f00;padding-left: 8px; background-color: yellow;}

	section{ padding-left: 30%; padding-top: 10px;}

</style>