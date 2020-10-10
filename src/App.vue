<template>
  <div id="app" class="flex-column">
      <div class="flex-header">

      </div>
      <div class="flex-container">
        <div class="flex-aside">
          <main-menu></main-menu>
        </div>
        <div class="flex-main  overflow-auto">
          <router-view/>
          <el-backtop target=".flex-main" :bottom="100" :visibility-height="20">
            <div
                style="{
                  height: 100%;
                  width: 100%;
                  background-color: #f2f5f6;
                  box-shadow: 0 0 6px rgba(0,0,0, .12);
                  text-align: center;
                  line-height: 40px;
                  color: #1989fa;
                }"
            >
              UP
            </div>
          </el-backtop>
        </div>
      </div>

      <div class="flex-footer"></div>

  </div>
</template>

<script>
import MainMenu from "./components/main/MainMenu";

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
}
/** 如果想要布局容器满屏大小需要设置4个height为100%**/
html,body,.el-container,.flex-container{
  height: 100%;
}
.flex-main{
  background-color: #f0f3f4;
}
/*
  布局容器CSS
*/
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  justify-content: center;
  /*height: 100%;*/
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 0;
}

/**
  给子容器加边线
 */
/*div{*/
/*  border: 1px solid orange;*/
/*}*/


</style>
