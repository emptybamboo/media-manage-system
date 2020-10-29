<template>
  <div id="enter" class="flex-simple">
      <div id="enter-card" class="flex-simple flex-col-center flex-row-center">
            <el-card :body-style="{ padding: '0px' }" class="flex-simple flex-column flex-row-center"  shadow="always">
              <img src="~@/assets/img/insert/Small-dimples.jpg" alt="">
              <router-view/>
            </el-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "Enter",
  data() {
    return {

    };
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
</style>
