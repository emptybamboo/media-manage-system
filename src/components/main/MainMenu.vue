<template>
      <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router='true'>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">主页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <slot>
              <i class="el-icon-location"></i>
              <span>内部管理</span>
            </slot>
          </template>
          <el-menu-item index="/staff">员工管理</el-menu-item>
<!--            <el-menu-item index="1-2">选项2</el-menu-item>-->
        </el-submenu>

      </el-menu>
</template>

<script>
export default {
  name: "MainMenu",
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
 .el-submenu__title{
   padding-left: 0;
 }
  .el-submenu > .el-menu-item{
    padding-left: 60px!important;
  }
</style>
