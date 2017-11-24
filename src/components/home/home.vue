<template>
	<div>
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
	.el-aside {
		height: 100%;
	}
</style>