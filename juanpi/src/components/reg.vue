<template>
	<div id="header">
		<div>
			<router-link to="/my" tag="span"><</router-link>注册
		</div>
			<p>账号：<input type="text" placeholder="请输入邮箱" v-model="datalist.username"></p>
			<p>密码：<input type="password" v-model="datalist.password"></p>
			<p class="aa">确认密码：<input type="password" v-model="datalist.password2"></p>
			<button @click="handleclick">注册</button>
	</div>
</template>

<script>
	import axios from "axios";
	export default{
		data(){
			return {
				datalist:{
					username:"",
					password:"",
					password2:""
				}
			}
			
		},
		methods:{
			handleclick(){
				var usernameRe = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;
				if(usernameRe.test(this.datalist.username)){
					var zz={
					username:this.datalist.username,
					password:this.datalist.password,
					password2:this.datalist.password2
				}
				axios.post("/api/reg",zz).then((res)=>{
					console.log(res)
				})
			}else{
				alert('用户名格式不正确')
			}
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
		border-bottom: 1px solid #ccc;
		span{
			float:left;
			font-size:30px;
			padding-left: 15px
		};
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
	.aa{
		margin-left: 15px
	}
</style>