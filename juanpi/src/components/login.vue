<template>
	<div id="header">
		<div>
			<router-link to="/my" tag="span"><</router-link>登录
		</div>
		<p>账号：<input type="text" placeholder="请输入账号" v-model="datalist.username"></p>
		<p>密码：<input type="password" v-model="datalist.password"></p>
		<button @click="handleclick">登录</button>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		data(){
			return {
				datalist:{
					username:"",
					password:""
				}
			}
		},
		methods:{
			handleclick(){
				var aa={
					username:this.datalist.username,
					password:this.datalist.password
				}
				axios.post("/api/login",aa).then((res)=>{
					if(res.data===1){
						console.log('asda')
						window.location.href="/#/home"
					}
					
					
				})
			}
		}	
	}
</script>

<style scoped lang="scss">
	#header div{
		height:40px;
		text-align:center;
		line-height: 40px;
		font-size: 20px;
		span{
			float:left;
			font-size:30px;
			padding-left: 15px
		}
	}
		p{
		height:30px;
		margin-top:10px;
		margin-left: 50px;
		input{
			border:1px solid #000;
			height:30px;
			width:220px;
			padding-left: 10px
		}
	}
	button{
		margin-left:90px;
		height:30px;
		width:200px;
		margin-top: 15px;
	}

</style>