<template>
  <div id="login" class="flex-simple">
      <div id="login-card" class="flex-simple flex-col-center flex-row-center">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>

<style scoped>
#login{
  background-image: url("../assets/img/background/58466607_p0_master1200.jpg");
  background-size:100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
}
#login-card{
  height: 100%;
  width: 100%;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-card{
  /*height: 50%;*/
  /*width: 25%;*/
  height: auto;
  width: auto;
}
</style>
