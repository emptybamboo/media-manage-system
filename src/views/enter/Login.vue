<template>
  <div id="login" class="flex-simple flex-column flex-row-center">
    <div class="flex-simple flex-column flex-row-center flex-col-center">
      <div class="padding-little">后台管理系统登录</div>
      <el-input v-model="user.userName" placeholder="账户" class="padding-little"></el-input>
      <el-input placeholder="密码" v-model="user.password" show-password  class="padding-little"></el-input>
    </div>
    <div id="login-button" class="flex-simple flex-column flex-row-center flex-col-center padding-little">
      <el-button type="success" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      user : {
        userName : '',
        password : '',
      }
    }
  },
  methods : {
    login(){
      // this.$axios.post('/login',this.$Qs.stringify(this.user)).then(res=>{
      this.$axios.get('/login?userName='+this.user.userName+"&password="+this.user.password).then(res=>{
        console.log("触发登录post接口");
        console.log(res);
        console.log(res.data);
        console.log(localStorage);

        this.$message({
          type: 'success',
          message: res.message
        });
        //存起token
        localStorage.token = res.data.token;
        console.log("存起token");
        console.log(localStorage.token);
        this.$router.push('/');
      }).catch(res => {
        console.log("登录失败");
        console.log(res);
        this.$message({
          type: 'error',
          message: "登录失败",
        });
      });
    }
  }
}
</script>

<style scoped>
.el-input{
  width: 80%;
}

</style>
