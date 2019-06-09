<template>
  <div class="login">
    <div class="top">
      <span @click="isAccount = true" :class="isAccount ? 'status' : ''" class="btn">账号</span>
      <span @click="isAccount = false" :class="isAccount ? '' : 'status'" class="btn">手机号</span>
    </div>
    <div v-if="isAccount" class="input-panel">
      <p class="row">
        <img src="../../assets/img/dl_yhm_2@3x.png" class="icon" />
        <input placeholder="请输入账号" class="input" type="text">
      </p>
      <p class="row">
        <img src="../../assets/img/dl_mima_2@3x.png" class="icon" />
        <input placeholder="请输入密码" class="input" type="password">
      </p>
    </div>
    <div v-else class="input-panel">
      <p class="row">
        <img src="../../assets/img/dl_sj_1@3x.png" class="icon" />
        <input placeholder="请输入中国大陆手机号码" class="input" type="text">
      </p>
      <p class="row">
        <img src="../../assets/img/dl_yzm_1@3x.png" class="icon" />
        <input placeholder="请输入验证码" class="input" type="text">
        <span  class="yzm-btn">获取</span>
      </p>
    </div>
    <div @click="goToAccountDetails" class="login-btn">登录闲鱼通</div>
    <p class="tips">
      <span class="pull-left">忘记密码?</span>
      <span @click="goToRegister" class="pull-right">没有账号?注册>></span>
    </p>
    <img class="logo" src="../../assets/img/dl_bg@3x.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        isAccount: true,

      }
    },
    mounted() {
    },
    methods: {
      goToRegister(){
        this.$router.push('/register');
      },
      goToAccountDetails(){
        this.$router.push('./accountDetails');
      }
    }
  }
</script>

<style lang="less" scoped>
  /*@import "remStyle";*/
  @import "pxStyle";
</style>