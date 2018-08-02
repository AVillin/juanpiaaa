<template>
	<aside>
		<ul>
			<li class="drag">女装</li>
			<li class="menswear">男装</li>
			<li class="baby">母婴</li>
			<li class="shoe">鞋子</li>
			<li class="bag">箱包</li>
			
		</ul>
	</aside>

	

</template>

<script>
	export default{
		name:"sidebar",
		data(){
			return {
			
			}
		}
		
	}

</script>

<style scoped lang="sass">
	aside{position: fixed; top: 55px; left: 0; width: 25%; height: 100%;}
	
	li{padding: 10px; width: 100%; text-align: left; padding-left: 10px;}
	/* .active{border-left: 2px solid #f60;} */
	


</style>