<template>
  <div id="login" class="flex-simple flex-column flex-row-center">
    <div class="flex-simple flex-column flex-row-center flex-col-center">
      <el-input v-model="user.userName" placeholder="账户" class="padding-little"></el-input>
      <el-input placeholder="密码" v-model="user.password" show-password  class="padding-little"></el-input>
    </div>
    <div id="login-button" class="flex-simple flex-column flex-row-center flex-col-center">
      <el-button type="success">登录</el-button>
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
  }
}
</script>

<style scoped>
.el-input{
  width: 80%;
}

</style>
