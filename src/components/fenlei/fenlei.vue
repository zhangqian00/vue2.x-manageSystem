<template>
	<div id="fenlei">
		<el-container>
			<el-aside width="200px">	
				<!-- 侧边栏组件 -->
				<v-aside isChose="2"></v-aside>
			</el-aside>
			<el-container>
				<el-header style="height: 50px;">
			  		<!-- 头部组件 -->
			    	<v-header></v-header>
			    </el-header>
			    <el-main>
			    	<el-row>
			    		<el-col :span='4' class='tree'>
			    			<el-tree
							:data="data5"
							node-key="id"
							default-expand-all
							:expand-on-click-node="false">
						      <span class="custom-tree-node" slot-scope="{ node, data }">
						        <span>{{ node.label }}</span>
						        <span>
						          <el-button
						            type="text"
						            size="mini"
						            @click="">
						            <i class="el-icon-plus"></i>
						          </el-button>
						          <el-button
						            type="text"
						            size="mini"
						            @click="">
						            <i class="el-icon-delete"></i>
						          </el-button>
						        </span>
						      </span>
						    </el-tree>
			    		</el-col>
			    		<el-col :span='20'>
			    			<el-table
							ref="multipleTable"
							:data="tableData3"
							tooltip-effect="dark"
							style="width: 100%"
							@selection-change="">
								<el-table-column
								  type="selection"
								  width="55">
								</el-table-column>
								<el-table-column
								  label="日期"
								  width="220">
								  <template slot-scope="scope">{{ scope.row.date }}</template>
								</el-table-column>
								<el-table-column
								  prop="name"
								  label="姓名"
								  width="220">
								</el-table-column>
								<el-table-column
								  prop="province"
								  label="省份"
								  width="190"
								  show-overflow-tooltip>
								</el-table-column>
								<el-table-column
								  prop="city"
								  label="市区"
								  width="190"
								  show-overflow-tooltip>
								</el-table-column>
								<el-table-column
								  prop="address"
								  label="地址"
								  width="320"
								  show-overflow-tooltip>
								</el-table-column>
								<el-table-column
								  label="操作">
								  <template slot-scope='scope'>
								  	<el-button type='primary' size='mini'>查看</el-button>
								  	<el-button type='danger' size='mini'>删除</el-button>
								  </template>
								</el-table-column>
							</el-table>
			    		</el-col>
			    	</el-row>
			    </el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	let id = 1000;
	export default {
		data(){
			return {
				tableData3: [{
		          date: '2016-05-03',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-08',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-06',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		          date: '2016-05-07',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄'
		        }],
		        data5: [{
		          label: '一级 1',
		          children: [{
		            label: '二级 1-1',
		            children: [{
		              label: '三级 1-1-1'
		            }]
		          }]
		        }, {
		          label: '一级 2',
		          children: [{
		            label: '二级 2-1',
		            children: [{
		              label: '三级 2-1-1'
		            }]
		          }, {
		            label: '二级 2-2',
		            children: [{
		              label: '三级 2-2-1'
		            }]
		          }]
		        }, {
		          label: '一级 3',
		          children: [{
		            label: '二级 3-1',
		            children: [{
		              label: '三级 3-1-1'
		            }]
		          }, {
		            label: '二级 3-2',
		            children: [{
		              label: '三级 3-2-1'
		            }]
		          }]
		        }],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	#fenlei .el-header {
		padding: 0 20px 0;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}
	#fenlei .el-container {
		min-height: 100%;
		overflow: hidden;
	}
	#fenlei .el-main {
		min-height: 100%;
		overflow: hidden;
		background-color: #fff;
	}
	#fenlei .el-main .tree {
		border-right: 1px solid #ccc;
		margin-bottom: -9999px;
		padding-bottom: 9999px;
	}
</style>