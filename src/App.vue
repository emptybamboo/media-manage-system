<template>
  <div id="app" class="flex-column">
    <router-view/>
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



</style>
