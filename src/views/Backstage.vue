<template>
  <div id="backstage"  class="flex-column">
      <div class="flex-header">
        <div class="flex-simple flex-right">
          <el-dropdown trigger="click">
            <div class="demo-type"  style="margin-right: 10px">
              <div class="flex-simple flex-col-center flex-row-center">
                <el-avatar shape="square" :size="40" src="~@/assets/img/logo/error.png" @error="errorHandler">
                  <img src="~@/assets/img/insert/Small-dimples.jpg"/>
                </el-avatar>
              </div>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-sort-down" @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
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
  },
  methods: {
    errorHandler() {
      return true;
    },
    //退出登录
    logout(){
      console.log("退出登录方法");
      this.$axios.post('/logout',this.$Qs.stringify({token:localStorage.token})).then(res=>{
        console.log("触发退出登录post接口");
        console.log(res.data);
        console.log(localStorage);
        if(parseInt(res.code)>199&&parseInt(res.code)<400){
          this.$message({
            type: 'success',
            message: res.message
          });
          //清空token
          localStorage.removeItem('token');
          console.log("清空token");
          console.log(localStorage);
          console.log(localStorage.token);
          this.$router.push('/enter');
        }else{
          console.log("退出登录失败");
          console.log(res);
          this.$message({
            type: 'error',
            message: "退出登录失败",
          });
        }
      }).catch(res => {
        console.log("退出登录失败");
        console.log(res);
        this.$message({
          type: 'error',
          message: "退出登录失败",
        });
      });
    }
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
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
