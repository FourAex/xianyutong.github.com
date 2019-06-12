<template>
    <div class="user-center">
        <div class="panel">
            <div class="user-info">
                <img src="../../assets/img/img.png" class="img" alt="">
                <div class="info">
                    <p class="row"><span>账号:</span> 13900000000</p>
                    <p class="row"><span>ID:</span> 123321</p>
                </div>
            </div>
        </div>
        <ul class="btn-list">
            <router-link tag="li" class="btn" to="/orderList">
                <img src="../../assets/img/my_1_jinri@3x.png" class="icon" alt="">
                <span>今日收单</span>
            </router-link>
            <router-link tag="li" class="btn" to="/orderList">
                <img src="../../assets/img/my_1_qiri@3x.png" class="icon" alt="">
                <span>七日收单</span>
            </router-link>
            <router-link tag="li" class="btn" to="/orderList">
                <img src="../../assets/img/my_1_quanbu@3x.png" class="icon" alt="">
                <span>全部收单</span>
            </router-link>
        </ul>
        <ul class="row-list clearfloat">
            <router-link tag="li" class="item" to="/changePassword">
                <img src="../../assets/img/mm.png" class="icon" alt="">
                <span>修改密码</span>
            </router-link>
            <router-link tag="li" class="item" to="/customerService">
                <img src="../../assets/img/my_1_kefu@3x.png" class="icon" alt="">
                <span>联系客服</span>
            </router-link>
            <router-link tag="li" class="item" to="/about">
                <img src="../../assets/img/my_1_guanyu@3x.png" class="icon" alt="">
                <span>关于全民付</span>
            </router-link>
            <li @click="update" class="item">
                <img src="../../assets/img/my_1_xitong@3x.png" class="icon" alt="">
                <span>系统版本</span>
                <span class="pull-right">1.1.0</span>
            </li>
        </ul>
        <div class="submit-btn">退出登录</div>
    </div>
</template>

<script>
  export default {
    name: "userCenter",
    data(){
      return{

      }
    },
    methods: {
        update(){
        }
    }
  }
</script>

<style lang="less" scoped>
    .user-center{
        width: 100%;
        background-color: #FAF8F4;
        .panel{
            height: 1.56rem;
            background:linear-gradient(90deg,rgba(219,184,131,1) 0%,rgba(204,166,107,1) 100%);
            padding: .44rem .16rem 0;
            .user-info{
                width: 100%;
                display: flex;
                .img{
                    width: .64rem;
                    height: .64rem;
                    margin-right: .10rem;
                }
                .info{
                    flex: 1;
                    .row {
                        width: 100%;
                        font-size: .20rem;
                        color: #fff;
                        margin-top: .02rem;
                        span{
                            display: inline-block;
                            width: .36rem;
                            text-align: right;
                            font-size: .12rem;
                            color: rgba(255,255,255,.48);
                        }
                    }
                }
            }
        }
        .btn-list{
            width: 100%;
            background-color: #fff;
            margin: -0.16rem auto .10rem;
            border-radius: .16rem .16rem 0 0;
            padding: .3rem 0 .32rem;
            font-size: .15rem;
            display: flex;
            justify-content: space-around;
            .icon{
                width: .29rem;
                height: .29rem;
                display: block;
                margin: 0 auto 0.04rem;
            }
        }
        .row-list{
            width: 100%;
            padding-left: .16rem;
            margin-bottom: .1rem;
            background-color: #fff;
            .item{
                width: 100%;
                height: .50rem;
                line-height: .50rem;
                font-size: .15rem;
                border-bottom: 1px solid #F1EDE6;
                position: relative;
                padding-left: .21rem;
                &:last-child{
                    border-bottom: none;
                }
                .icon{
                    width: .15rem;
                    height: .15rem;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .pull-right{
                    padding-right: .4rem;
                }
            }
        }
        .submit-btn {
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            font-size: .15rem;
            color: #FF5C3F;
            background-color: #fff;
        }
    }
</style>