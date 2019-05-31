<template>
    <div class="account-details">
        <div class="top">闲鱼通</div>
        <div class="account-info">
            <p class="title">账户余额(元)</p>
            <p class="account-number">{{accountBalance.toLocaleString()}}</p>
            <div class="info">
                <div class="panel">
                    <p class="text">今日总收益(元)</p>
                    <p class="count">{{accountBalance.toLocaleString()}}</p>
                </div>
                <div class="panel">
                    <p class="text">累计总收益(元)</p>
                    <p class="count">{{accountBalance.toLocaleString()}}</p>
                </div>
            </div>
        </div>
        <p class="deteils-title">收益明细</p>
        <ul class="detail-list">
           <li v-for="(item,index) in list" :key="index" class="item">
               <p class="title">
                   <span class="left">支付宝账号:&nbsp;17384057896</span>
                   <img @click="changeStatus(index)" :src='item.img' class="icon" alt="">
               </p>
               <div class="info clearfloat">
                   <div class="panel">
                       <p class="text">今日收益(元)</p>
                       <p class="count">{{accountBalance.toLocaleString()}}</p>
                   </div>
                   <div class="panel">
                       <p class="text">累计收益(元)</p>
                       <p class="count">{{accountBalance.toLocaleString()}}</p>
                   </div>
               </div>
               <div class="info clearfloat">
                   <div class="panel">
                       <p class="text">今日收款(元)</p>
                       <p class="count">{{accountBalance.toLocaleString()}}</p>
                   </div>
                   <div class="panel">
                       <p class="text">累计收款(元)</p>
                       <p class="count">{{accountBalance.toLocaleString()}}</p>
                   </div>
               </div>
           </li>
            <li class="add">
                <div class="row">
                    <span class="pull-left">最多可绑定5个支付宝</span>
                    <span @click="goToBinding" class="pull-right">继续绑定</span>
                </div>
            </li>
            <li class="add">
                <div class="row">
                    <span class="pull-left">您还未绑定支付宝</span>
                    <span @click="goToBinding" class="pull-right">马上绑定</span>
                </div>
            </li>
        </ul>
        <div class="footer">
            <ul class="nav-list">
                <li @click="changeNav(index)" v-for="(item,index) in navList" :key="index" :class="item.status ? 'status' : ''" class="item">
                    <img :src="item.status ? item.activeImg : item.hideImg" class="icon" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const KAI_IMAGE = require('../../assets/img/sy_kai@3x.png');
    const GUAN_IMAGE = require('../../assets/img/sy_guan@3x.png');
  export default {
    name: "accountDetails",
    data(){
      return{
        accountBalance: 1290000,
        list: [
          {
            img: KAI_IMAGE,
            status: true,
          },
          {
            img: KAI_IMAGE,
            status: true,
          }
        ],
        navList: [
          {
            activeImg: require('../../assets/img/dh_sy_2@3x.png'),
            hideImg: require('../../assets/img/dh_sy_1@3x.png'),
            status: true,
            title: '首页'
          },
          {
            activeImg: require('../../assets/img/dh_zj_2@3x.png'),
            hideImg: require('../../assets/img/dh_zj_1@3x.png'),
            status: false,
            title: '资金'
          },
          {
            activeImg: require('../../assets/img/dh_wd_2@3x.png'),
            hideImg: require('../../assets/img/dh_wd_1@3x.png'),
            status: false,
            title: '我的'
          }
        ]
      }
    },
    methods: {
      changeStatus(index){
        const target = this.list[index];
        let status = target.status;
        target.status = !status;
        target.img = status ? GUAN_IMAGE : KAI_IMAGE;
      },
      changeNav(index){
        this.navList.forEach((item,i) => {
          item.status = index === i;
        })
      },
      goToBinding(){
        this.$router.push('/binding');
      }
    }
  }
</script>

<style lang="less" scoped>
    .account-details{
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0.08rem .16rem .65rem;
        .top{
            font-size: .24rem;
            color: #000;
        }
        .account-info{
            width: 100%;
            height: 1.57rem;
            padding: .24rem .16rem 0;
            margin: .20rem auto .34rem;
            border-radius: 0.08rem;
            background: linear-gradient(135deg,rgba(219,184,131,1) 0%,rgba(204,166,107,1) 100%);
            box-shadow: 0px 14px 20px rgba(213, 183, 154, 0.5);
            color: #fff;
            font-weight: bold;
            .title{
                font-size: .15rem;
            }
            .account-number{
                font-size: .24rem;
                padding-bottom: 16px;
                margin-bottom: .15rem;
                border-bottom: 1px solid rgba(255,255,255,.26);
            }
            .info{
                text-align: left;
                width: 100%;
                .panel{
                    width: 50%;
                    float: left;
                    &:last-child{
                        position: relative;
                        padding-left: .16rem;
                        &:after{
                            content: ' ';
                            width: 2px;
                            height: 50%;
                            background-color: #fff;
                            opacity: 0.26;
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);


                        }
                    }
                }
                .text{
                    font-size: .12rem;
                    color: #E7D3B4;
                    font-weight: normal;
                }
                .count{
                    font-size: .18rem;
                }
            }
        }
        .deteils-title{
            font-size: .18rem;
            color: #000;
            margin-bottom: .16rem;
        }
        .detail-list{
            flex: 1;
            .item{
                width: 100%;
                border-radius: 0.08rem;
                background-color: #FAFAFA;
                padding: .20rem .16rem .16rem;
                font-weight: 500;
                margin-bottom: 0.16rem;
                .title{
                    height: .3rem;
                    line-height: .3rem;
                    margin-bottom: 0.19rem;
                    font-size: .15rem;
                    .icon{
                        width: 0.52rem;
                        height: .34rem;
                        float: right;
                        margin-right: -0.08rem;
                    }
                }
                .info{
                    text-align: left;
                    width: 100%;
                    border-top: 1px solid #f1e9e9;
                    padding: 0.15rem 0;
                    .panel{
                        float: left;
                        width: 50%;
                        &:last-child{
                            position: relative;
                            padding-left: .16rem;
                            &:after{
                                content: ' ';
                                width: 2px;
                                height: 50%;
                                background-color: #f1e9e9;
                                position: absolute;
                                left: 0;
                                top: 50%;
                                transform: translateY(-50%);


                            }
                        }
                    }
                    .text{
                        font-size: .12rem;
                        color: #A4A9B1;
                        font-weight: normal;
                        margin-bottom: 0.04rem;
                    }
                    .count{
                        font-size: .16rem;
                    }
                }
            }
            .add{
                width: 100%;
                height: .72rem;
                line-height: .40rem;
                border-radius: 0.08rem;
                background-color: #FAFAFA;
                padding: .16rem;
                font-size: 0.15rem;
                margin-bottom: 0.16rem;
                .pull-left{
                    color: #A4A9B1;
                }
                .pull-right{
                    color: #fff;
                    width: 1.05rem;
                    height: 0.40rem;
                    background:rgba(255,92,63,1);
                    box-shadow:0px 4px 8px 0px rgba(255,92,63,0.41);
                    text-align: center;
                    border-radius: 0.40rem;
                }
            }
        }
        .footer{
            width: 100%;
            background-color: #fff;
            height: .65rem;
            padding: 0.05rem 0;
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 9;
            .nav-list{
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-around;
                padding: 0.05rem 0;
                .item{
                    width: .5rem;
                    font-size: 0.1rem;
                    text-align: center;
                    color: #AAA497;
                    .icon{
                        width: .24rem;
                        height: .24rem;
                        margin: 0 auto 0.07rem;
                        display: block;
                    }
                    &.status{
                        color: #CCA66B;
                    }
                }
            }
        }
    }
</style>