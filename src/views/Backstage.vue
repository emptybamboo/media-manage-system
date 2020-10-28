<template>
  <div id="backstage"  class="flex-column">
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
import MainMenu from "@/components/main/MainMenu";

export default {
  name: "Backstage",
  components: {
    MainMenu
  }
}
</script>

<style scoped>
  #backstage{
    height: 100%;
    display: flex;
  }
  /** 如果想要布局容器满屏大小需要设置4个height为100%**/
  html,body,.flex-container{
    height: 100%;
  }
  .flex-main{
    background-color: #f0f3f4;
  }
</style>
