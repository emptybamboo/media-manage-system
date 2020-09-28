<template>
  <div id="app" class="flex-column">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <el-container>-->
<!--      <el-aside>-->
<!--          <main-menu></main-menu>-->
<!--      </el-aside>-->
<!--      <el-container>-->
<!--        <el-header>Header</el-header>-->
<!--        <el-main>-->
<!--          Main-->
<!--          <router-view/>-->
<!--        </el-main>-->
<!--      </el-container>-->
<!--    </el-container>-->

<!--    <el-container>-->
<!--      <el-header>Header</el-header>-->
<!--      <el-container>-->
<!--        <el-aside width="15%">-->
<!--          <main-menu></main-menu>-->
<!--        </el-aside>-->
<!--        <el-container>-->
<!--          <el-main style="padding: 0">-->
<!--            <router-view/>-->
<!--          </el-main>-->
<!--          <el-footer>Footer</el-footer>-->
<!--        </el-container>-->
<!--      </el-container>-->
<!--    </el-container>-->


      <div class="flex-header">

      </div>
      <div class="flex-container">
        <div class="flex-aside">
          <main-menu></main-menu>
        </div>
        <div class="flex-main">
          <router-view/>
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
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
}
/** 如果想要布局容器满屏大小需要设置4个height为100%**/
html,body,.el-container,.flex-container{
  height: 100%;
}
/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
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
