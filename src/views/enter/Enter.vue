<template>
  <div id="enter" class="flex-simple">
      <div id="enter-card" class="flex-simple flex-col-center flex-row-center">


            <el-card :body-style="{ padding: '0px',width:'100%' }"   shadow="always">
              <div class="flex-simple flex-column" style="height: 100%;width: 100%">
                <div class="flex-simple flex-right">
                  <el-switch
                      v-model="change"
                      active-text="登录"
                      inactive-text="注册"
                      @change="switchPage">
                  </el-switch>
                </div>
              </div>

              <div class="flex-simple flex-column flex-row-center">
                <img src="~@/assets/img/insert/Small-dimples.jpg" alt="">
                <router-view/>
              </div>

            </el-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "Enter",
  data() {
    return {
        change : true,
    };
  },
  methods : {
    switchPage(){
      console.log("this.change:"+this.change);
      this.change === false?
          this.$router.push('/enter/register').catch(res=>{console.log(res)})
          :
          this.$router.push('/enter');

    }
  }
}
</script>

<style>
#enter{
  background-image: url("~@/assets/img/background/58466607_p0_master1200.jpg");
  background-size:100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
#enter-card{
  height: 100%;
  width: 100%;
}
.el-card {
  /*height: 50%;*/
  /*width: 25%;*/
  height: auto;
  width: auto;
  padding: 45px;
  opacity: 0.8;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}
.el-switch{
  padding : 0 0 30px 30px;/*上右下左*/
}
</style>
