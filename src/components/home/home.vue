<template>
	<div>
		<el-container>
		  <v-aside></v-aside>
		  <el-container>
		    <v-header></v-header>
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
	
</style>