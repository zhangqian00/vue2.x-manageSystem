<template>
	<div class="home">
		<el-container>
		  <el-aside width="200px">	
		  	<!-- 侧边栏组件 -->
		  	<v-aside isChose="1"></v-aside>
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
							<div id="echartsOne" ref="echartsOne" style="width: 500px;height: 400px"></div>
						</div>
					</el-col>
				</el-row>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import Echarts from 'echarts';
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			this.echartsInit();
		},
		methods: {
			echartsInit() {
				this.chart = Echarts.init(this.$refs['echartsOne']);
				let option = {
						tooltip: {
					        trigger: 'axis',
					        axisPointer: {
					            type: 'cross',
					            crossStyle: {
					                color: '#999'
					            }
					        }
					    },
					    toolbox: {
					        show: false
					    },
					    legend: {
					        data:['蒸发量','降水量','平均温度']
					    },
					    xAxis: [
					        {
					            type: 'category',
					            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
					            axisPointer: {
					                type: 'shadow'
					            }
					        }
					    ],
					    yAxis: [
					        {
					            type: 'value',
					            name: '水量',
					            min: 0,
					            max: 250,
					            interval: 50,
					            axisLabel: {
					                formatter: '{value} ml'
					            }
					        },
					        {
					            type: 'value',
					            name: '温度',
					            min: 0,
					            max: 25,
					            interval: 5,
					            axisLabel: {
					                formatter: '{value} °C'
					            }
					        }
					    ],
					    series: [
					        {
					            name:'蒸发量',
					            type:'bar',
					            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
					        },
					        {
					            name:'降水量',
					            type:'bar',
					            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
					        },
					        {
					            name:'平均温度',
					            type:'line',
					            yAxisIndex: 1,
					            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
					        }
					    ]
					};
				this.chart.setOption(option);
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
		margin: 0 20px;
		background-color: #fff;
	}
</style>