<template>
	<div id="list-right">
		<div class="cate-second">
			<a href="">
				<img src="../../assets/连衣裙.png" height="-1" width="-1">
				<span>连衣裙</span>
			</a>
		</div>
		<div class="cate-second">
			<a href="">
				<img src="../../assets/衬衫.png" height="-1" width="-1">
				<span>衬衫</span>
			</a>
		</div>
		<div class="cate-second">
			<a href="">
				<img src="../../assets/清新套装.png" height="-1" width="-1">
				<span>清新套装</span>
			</a>
		</div>
		<div class="cate-second">
			<a href="">
				<img src="../../assets/打底T恤.png" height="-1" width="-1">
				<span>打底T恤</span>
			</a>
		</div>
		<div class="cate-second">
			<a href="">
				<img src="../../assets/休闲裤.png" height="-1" width="-1">
				<span>休闲裤</span>
			</a>
		</div>
		<div class="cate-second">
			<a href="">
				<img src="../../assets/休闲套装.png" height="-1" width="-1">
				<span>休闲套装</span>
			</a>
		</div>
		<div class="cate-second">
			<a href="">
				<img src="https://s2.juancdn.com/bao/180517/2/3/5afd2af7b6f8ea0f021d79cc_200x200.png?iopcmd=convert&dst=webp" height="-1" width="-1">
				<span>针织衫</span>
			</a>
		</div>
	</div>

</template>

<script>
	export default{
		name:"drag",
		data(){
			return {

			}
		}
	}
</script>

<style scoped lang="sass">
	#list-right{position: fixed; top: 55px; right: 0; width: 71%; height: 100%;}
	#list-right .cate-second{float: left; width: 30%;}
	#list-right .cate-second a{text-decoration: none;}
	#list-right .cate-second span{ display: block; height: 20px; line-height: 20px; text-align: center; font-size: 14px; color: #333;}
	#list-right .cate-second img{width: 100%;}

</style>