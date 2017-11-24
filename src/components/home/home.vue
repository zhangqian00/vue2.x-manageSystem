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
		padding: 0;
	}
	.home {
		overflow: hidden;
	}
	.el-container {
		overflow: hidden;
		margin: 25px 0 0 100px;
	}
	.el-main {
		padding: 0;
		margin: 0;
	}
</style>