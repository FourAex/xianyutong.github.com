<template>
    <div class="change-password">
        <div class="input-panel">
            <p class="row">
                <img src="../../assets/img/mm.png" class="icon" />
                <input placeholder="请输入新密码" class="input" type="password">
            </p>
            <p class="row">
                <img src="../../assets/img/mm.png" class="icon" />
                <input placeholder="请确认密码" class="input" type="password">
            </p>
        </div>
        <div @click="goToUserCenter" class="login-btn">确认修改</div>
    </div>
</template>

<script>
  export default {
    name: "changePassword",
    methods: {
      goToUserCenter(){
        this.$router.push('/userCenter')
      }
    }
  }
</script>

<style lang="less" scoped>
    .change-password{
        width: 100%;
        height: 100%;
        position: relative;
        padding: 1.08rem .24rem 0;
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
                    -webkit-tap-highlight-color: transparent;
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
            margin-top: .8rem;
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
    }
</style>