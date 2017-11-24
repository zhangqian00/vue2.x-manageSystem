<template>
	<div class="home">
		<el-container>
		  <el-aside width="200px">	
		  	<v-aside></v-aside>
		  </el-aside>
		  <el-container>
		  	<el-header style="height: 50px;">
		    	<v-header></v-header>
		    </el-header>
		    <el-main>Main</el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'home'
			}
		}
	}
</script>

<style scoped>
	.el-header {
		padding: 0 20px 0;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	.home {
		overflow: hidden;
	}
	.el-container {
		overflow: hidden;
	}
	.el-main {
		padding: 0;
		margin: 0;
	}
</style>