<template>
	<div class="home">
		<el-container>
		  <el-aside width="200px">	
		  	<!-- 侧边栏组件 -->
		  	<v-aside></v-aside>
		  </el-aside>
		  <el-container>
		  	<el-header style="height: 50px;">
		  		<!-- 头部组件 -->
		    	<v-header></v-header>
		    </el-header>
		    <el-main>
		    	<!-- 信息总览部分 -->
		    	<el-row type="flex" class="row-bg information" justify="space-around">
				  <el-col :span="5">
				  	<div class="grid-content clearfix money">
				  		<i class="el-icon-menu"></i>
				  		<span>我的收入</span>
				  		<h5>￥3658</h5>
				  	</div>
				  </el-col>
				  <el-col :span="5">
				  	<div class="grid-content clearfix lesson">
				  		<i class="el-icon-tickets"></i>
				  		<span>课程数量</span>
				  		<h5>236</h5>
				  	</div>
				  </el-col>
				  <el-col :span="5">
				  	<div class="grid-content clearfix userNum">
				  		<i class="el-icon-mobile-phone"></i>
				  		<span>用户数量</span>
				  		<h5>86536</h5>
				  	</div>
				  </el-col>
				  <el-col :span="5">
				  	<div class="grid-content clearfix lookNum">
				  		<i class="el-icon-view"></i>
				  		<span>浏览量</span>
				  		<h5>65986</h5>
				  	</div>
				  </el-col>
				</el-row>
				<!-- Echarts部分 -->
				<el-row class="echartsPart">
					<el-col :span="24">
						<div class="grid-content bg-purple-dark">
							Echarts部分
						</div>
					</el-col>
				</el-row>
		    </el-main>
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
	.information {
		margin: 20px 0;
	}
	.information .grid-content {
		padding: 15px;
		font-size: 14px;
		border-radius: 4px;
		cursor: pointer;
		color: #fff;
	}
	.grid-content i,.grid-content h5,.grid-content span {
		float: left;
	}
	.grid-content i {
		font-size: 46px;
		margin-right: 10px;
	}
	.grid-content span {
		width: 50%;
		margin-bottom: 5px;
	}
	.grid-content h5 {
		width: 50%;
	}
	.information .money {
		background-color: #FC8675;
	}
	.information .lesson {
		background-color: #5AB6DF;
	}
	.information .userNum {
		background-color: #65CEA7;
	}
	.information .lookNum {
		background-color: #EBC85E;
	}
	.echartsPart {
		height: 400px;
		margin: 0 20px;
		background-color: #fff;
	}
</style>