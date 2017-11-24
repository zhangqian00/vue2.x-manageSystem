<template>
	<el-col>
		<div class="asideTop">
			<div class="userPic">
				<img src="../../assets/logo.png" alt="">
			</div>
			<p class="username">admin</p>
		</div>
	    <el-menu default-active="2" text-color="#fff" active-text-color="#fefefe" class="el-menu-vertical-demo">
	      <el-submenu index="1" background-color="red">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>导航1</span>
	        </template>
	        <el-menu-item index="1-1">选项1</el-menu-item>
	        <el-menu-item index="1-2">选项2</el-menu-item>
	        <el-menu-item index="1-3">选项3</el-menu-item>
	      </el-submenu>
	      <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>导航2</span>
	        </template>
	        <el-menu-item index="2-1">选项1</el-menu-item>
	        <el-menu-item index="2-2">选项2</el-menu-item>
	        <el-menu-item index="2-3">选项3</el-menu-item>
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
		border-right: none;
		background-color: #2F4050;
	}
	/*.el-menu .el-submenu:hover {
		background-color: #2F4050;
	}*/
</style>