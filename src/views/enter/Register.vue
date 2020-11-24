<template>
  <div id="register"  class="flex-simple flex-column flex-row-center">
    <div class="flex-simple flex-column flex-row-center flex-col-center">
      <div class="padding-little">后台管理系统注册</div>
      <el-input v-model="user.userName" placeholder="账户" class="padding-little"></el-input>
      <el-input placeholder="密码" v-model="user.password" show-password  class="padding-little"></el-input>
    </div>
    <div id="login-button" class="flex-simple flex-column flex-row-center flex-col-center padding-little">
      <el-button type="success" @click="register">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      user : {
        userName : '',
        password : '',
      }
    }
  },
  methods : {
    register(){
      console.log("注册");
      this.$axios.post('/register',this.user).then(res=>{
        console.log("触发注册post接口");
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
        console.log("注册失败");
        console.log(res);
        this.$message({
          type: 'error',
          message: "注册失败",
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
