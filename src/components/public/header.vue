<template>
	<div class="header">
		
		<el-dropdown trigger="click">
	        <span class="el-dropdown-link">
	          <i class="el-icon-setting"></i> 个人中心
	        </span>
	      <el-dropdown-menu slot="dropdown">
	        <el-dropdown-item>修改资料</el-dropdown-item>
	        <el-dropdown-item divided>退出登录</el-dropdown-item>
	      </el-dropdown-menu>
	    </el-dropdown>
	    <!-- 消息提示 -->
		<el-badge :value="200" :max="99" class="item xiaoxi">
		  <i class="el-icon-message"></i>
		</el-badge>
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
	position: relative;
}
.header .el-dropdown {
	height: 100%;
	color: #337AB7;
	float: right;
}
.header .el-dropdown-link {
	width: 84px;
	height: 100%;
	text-align: center;
	line-height: 50px;
	cursor: pointer;
	display: inline-block;
}
.el-badge {
	cursor: pointer;
	color: #337AB7;
	position: absolute;
	
	top: 50%;
	transform: translateY(-50%);
}
.xiaoxi {
	right: 140px;
}
</style>