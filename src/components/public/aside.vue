<template>
	<el-col>
		<div class="asideTop">
			<div class="userPic">
				<img src="../../assets/logo.png" alt="">
			</div>
			<p class="username">admin</p>
		</div>
	    <el-menu default-active="2" text-color="#fff" background-color="#2F4050" active-text-color="#ffd04b" class="el-menu-vertical-demo">
	      <el-menu-item index="1">
	        <i class="el-icon-menu"></i>
	        <span slot="title">首页</span>
	      </el-menu-item>
	      <el-menu-item index="2">
	        <i class="el-icon-search"></i>
	        <span slot="title">分类管理</span>
	      </el-menu-item>
	      <el-submenu index="3">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>讲师管理</span>
	        </template>
	        <el-menu-item index="3-1">选项1</el-menu-item>
	        <el-menu-item index="3-2">选项2</el-menu-item>
	        <el-menu-item index="3-3">选项3</el-menu-item>
	      </el-submenu>
	      <el-submenu index="4">
	        <template slot="title">
	          <i class="el-icon-setting"></i>
	          <span>课程管理</span>
	        </template>
	        <el-menu-item index="4-1">选项1</el-menu-item>
	        <el-menu-item index="4-2">选项2</el-menu-item>
	        <el-menu-item index="4-3">选项3</el-menu-item>
	      </el-submenu>
	    </el-menu>
	  </el-col>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	}
</script>

<style scoped>
	.asideTop {
		height: 150px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.userPic {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin: 10px auto 0;
	}
	.userPic img {
		width: 100px;
		height: 100px;
	}
	.username {
		text-align: center;
		margin: 10px 0;
		color: #fefefe;
	}
	.el-col {
		background-color: #243443;
	}
	.el-menu {
		width: 200px;
		border-right: none;
		background-color: #2F4050;
		position: absolute;
		top: 150px;
		bottom: 0;
	}
</style>