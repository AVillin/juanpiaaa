<template>
	<div>
		<navbar></navbar>
		
		<div id="catelist">
			<ul id="one-list">
				<li v-for="data,idx in datalist" @click="handleClick(idx)" :class="currentIndex==idx ? 'white' : ''">
					{{data.name}}
				</li>
				<li class="lastchild"></li>
			</ul>

			<ul id="two-list">
				<li v-for="data in list" @click="handleClick2(data.id)">
					<img :src="'https://s2.juancdn.com' + data.icon"/>
					<span>{{data.name}}</span>
					<!-- <span>{{data.id}}</span> -->
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>

	import navbar from "./common/navbar"

	import axios from "axios"
	import router from "../router"
	export default{
		data(){
			return{
				datalist:[],
				list: [],
				currentIndex:0
			}
		},
		mounted(){
			//https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1533196608498&callback=jsonp1
			
			this.$jsonp('https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1533196608498&callback=jsonp1',{}).then(res=>{
				console.log(res);
				this.datalist = res
				this.list = this.datalist[0].secondCateList;
			})
		},
		methods :{
			handleClick(idx){
				// console.log(idx)
				this.list = this.datalist[idx].secondCateList
				console.log(this.list)
				this.currentIndex = idx
				console.log(idx)
			},

			handleClick2(ddd){
				router.push(`/detail/${ddd}`);

			}
		},
		components:{
			navbar
		}
	}
</script>

<style scoped lang="sass">

	/* nav{width: 100%; position: fixed; left: 0; top: 0;} */
	/* #all{display: flex; height: 100%; flex-direction:column; overflow: hidden;} */
	

	#catelist{width: 100%;}
	#one-list{width: 25%; background-color: #f9f9f9; float: left;/*  padding-bottom: 100px; */}
	#one-list li{width: 80%; height: 30px; line-height: 30px; text-align: left; border-bottom: 1px solid #f4f4f4; padding: 10px;font-size: 16px;}
	#one-list .lastchild{border-bottom: none;}


	#two-list{width: 71%; float: right; padding-bottom: 100px;}
	#two-list li{float: left; width: 33%; list-style: none;}
	#two-list li img{width: 100%;}
	#two-list li span{color: #666; font-size: 14px;}


	#one-list .white{ background-color: white; color: red; border-left: 2px solid #f00; padding-left: 8px;}

</style>