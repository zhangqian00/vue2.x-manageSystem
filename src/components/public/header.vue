<template>
	<div class="header">
		
			<el-dropdown trigger="click">
		      <span class="el-dropdown-link">
		        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
		      </span>
		      <el-dropdown-menu slot="dropdown">
		        <el-dropdown-item>黄金糕</el-dropdown-item>
		        <el-dropdown-item>狮子头</el-dropdown-item>
		        <el-dropdown-item>螺蛳粉</el-dropdown-item>
		        <el-dropdown-item>双皮奶</el-dropdown-item>
		        <el-dropdown-item>蚵仔煎</el-dropdown-item>
		      </el-dropdown-menu>
		    </el-dropdown>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
.header {
	width: 100%;
	height: 100%;
	/*position: fixed;
	top: 0;
	right: 0;*/
	background-color: green;
}
.header .el-dropdown {
	height: 100%;
	color: #fff;
	float: right;
}
.header .el-dropdown-link {
	height: 100%;
	line-height: 50px;
	cursor: pointer;
	display: inline-block;
}
</style>