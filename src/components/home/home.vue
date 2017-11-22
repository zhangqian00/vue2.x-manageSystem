<template>
	<div class="home">
		<el-container>
		  <v-aside></v-aside>
		  <el-container>
		    <v-header></v-header>
		    <el-main>{{msg}}</el-main>
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