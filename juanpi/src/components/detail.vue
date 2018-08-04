<template>
	<div>
		<div id="toptitle">
			<span class="lt">&lt;</span>
			<div class="goodname">{{goodname.name}}</div>
			<span class="search-a"><i class="iconfont icon-gouwuche"></i></span>
			<span class="more">&nbsp;&nbsp;...</span>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import router from "../router"
	export default{
		name:"detail",
		data(){
			return{
				goodname:[]
			}
		},
		mounted(){
			//https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1533196608498&callback=jsonp1

			/*this.$jsonp('https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1533196608498&callback=jsonp1',{}).then(res=>{
				console.log(res);
				this.datalist = res
				this.list = this.datalist[0].secondCateList;
				console.log(this.list)
			})*/
			
			axios.get(`/cate/subcatelist?cate_id=${this.$route.params.ddd}&pf=8&area=4&bi=222&source=null&front_cid=null`).then(res=>{
				this.goodname = res.data;
					console.log(res.data)
			});
		}
	}
</script>

<style scoped lang="sass">
	#toptitle{height: 40px; width: 100%; background-color: red; display: flex;}
	#toptitle span{ display: inline-block;}
	#toptitle .lt{ width: 40px; height: 100%; font-size: 30px;margin: 0px 10px;}
	#toptitle .goodname{ height: 40px; line-height: 40px; font-size: 20px; flex:1; text-align: center;}
	#toptitle .search-a{width: 40px; line-height: 40px;}
	#toptitle .search-a i{font-size: 30px;}
	#toptitle .more{width: 40px; font-size: 20px;}

</style>