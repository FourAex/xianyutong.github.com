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
  .login{
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: .68rem .24rem 0;
    position: relative;
    .logo{
      width: 1.5rem;
      height: 2.4rem;
      position: absolute;
      right: 0;
      top: .44rem;
      z-index: 0;
    }
    .top{
      height: .2rem;
      width: 100%;
      font-size: .16rem;
      color: #999;
      transform: translateX(-0.08rem);
      margin-bottom: 1.81rem;
      .btn{
        margin-right: .16rem;
        transition: all .1s;
        &.status{
          font-size: .24rem;
          color: #000;
          font-weight:600;
        }
      }
    }
    .input-panel{
      width: 100%;
      .row{
        height: .50rem;
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: .16rem;
        margin-bottom: .2rem;
        position: relative;
        .icon{
          width: .24rem;
          height: .24rem;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .input{
          flex: 1;
          height: .50rem;
          padding: .16rem .4rem .16rem 0;
          line-height: .18rem;
          background-color: #fff;
          outline: none;
          border: none;
          font-size: .15rem;
          color: #000;
          text-indent: .4rem;
        }
        .yzm-btn{
          width: .5rem;
          height: .5rem;
          text-align: center;
          color: #CCA66B;
          font-size: .15rem;
          line-height: .5rem;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &:after{
          content: " ";
          display: block;
          width: 100%;
          height: 2px;
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 2;
          background-color: #F1EDE6;
          transition: transform .3s;
        }
        &:hover{
          &:after{
            background-color: #000;
          }
        }
      }
    }
    .login-btn{
      margin-top: .48rem;
      width: 100%;
      height: .5rem;
      line-height: .5rem;
      border-radius: .5rem;
      background: linear-gradient(90deg,rgba(219,184,131,1) 0%,rgba(204,166,107,1) 100%);
      box-shadow: 0px 14px 20px rgba(213, 183, 154, 0.5);
      text-align: center;
      font-size: .16rem;
      font-weight: 600;
      color: #fff;
    }
    .tips{
      width: 100%;
      margin-top: .24rem;
      color: #CCA66B;
      font-size: .15rem;
    }
  }
</style>