<template>
    <div class="funds">
        <div class="top">资金</div>
        <div class="account-info">
            <div class="info">
                <span>账户余额(元)</span>
                <p class="count">12900</p>
            </div>
            <div class="btn-list">
                <router-link tag="span" class="btn" to="/balanceOut">转出</router-link>
                <router-link tag="span" class="btn status" to="/balanceEnter">转入</router-link>
            </div>
        </div>
        <p class="deteils-title">
            交易记录
            <span class="btn-list">
                <span @click="handleListBtnClick(index)" v-for="(item,index) in listBtn" :class="item.status ? 'status' : ''" :key="index" class="btn">{{item.title}}</span>
            </span>
        </p>
        <ul class="detail-list">
            <li v-for="(item,index) in list" :key="index" class="item panel-item">
                <p class="title">
                    <span class="left">
                        <span :class="item.status === 1 ? 'status' : ''" class="flag ">{{item.status === 1 ? '转入' : '转出'}}</span>
                        2019-06-12 12:12
                    </span>
                    <span :class="item.flag === 1 ? 'success' : item.flag === 2 ? 'wait' : 'error' " class="right">{{item.flagText}}</span>
                </p>
                <div v-if="item.status === 1" class="info">
                    <p class="row"><span class="text">转账时间:</span> 2018-05-18</p>
                    <p class="row"><span class="text">存款人姓名:</span> 张三</p>
                    <p class="row"><span class="text">存款金额:</span> ￥6000000</p>
                </div>
                <div v-else class="info">
                    <p class="row"><span class="text">收款银行卡:</span> **** **** **** 2222</p>
                    <p class="row"><span class="text">开户行:</span> 招商银行</p>
                    <p class="row"><span class="text">收款人姓名:</span> 张三</p>
                    <p class="row"><span class="text">捐款金额:</span> ￥6000000</p>
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: "funds",
    data() {
      return{
        list: [
          {
            flag: 1,
            flagText: '已完成',
            status: 1
          },
          {
            flag: 2,
            flagText: '审核中',
            status: 0
          },
          {
            flag: 3,
            flagText: '审核失败',
            status: 1
          },
        ],
        listBtn: [
          {
            title: '全部',
            status: true
          },
          {
            title: '转入',
            status: false
          },
          {
            title: '转出',
            status: false
          },
        ]
      }
    },
    methods: {
      handleListBtnClick(index) {
        this.listBtn.forEach((item,i) => {
          item.status = index === i;
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    .funds{
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0.08rem .16rem 0;
        .top{
            font-size: .24rem;
            color: #000;
        }
        .account-info{
            width: 100%;
            height: 1.20rem;
            padding: .36rem .16rem 0;
            margin: .20rem auto .34rem;
            border-radius: 0.08rem;
            background:linear-gradient(135deg,rgba(219,184,131,1) 0%,rgba(204,166,107,1) 100%);
            box-shadow: 0px 14px 20px rgba(213, 183, 154, 0.5);
            color: #fff;
            position: relative;
            .info{
                font-size: .15rem;
                font-weight: 500;
                .count{
                    font-size: .24rem;
                    font-weight: 800;
                }
            }
            .btn-list{
                position: absolute;
                top: 50%;
                right: .16rem;
                transform: translateY(-50%);
                text-align: center;
                font-size: .15rem;
                color: #fff;
                .btn{
                    width: .64rem;
                    height: .36rem;
                    line-height: .36rem;
                    border-radius: .36rem;
                    margin-right: 0.08rem;
                    display: inline-block;
                    border: 1px solid #fff;
                    &:last-child{
                        margin-right: 0;
                    }
                    &.status{
                        background-color: #fff;
                        color: #D4B078;
                    }
                }
            }
        }
        .deteils-title{
            font-size: .18rem;
            color: #000;
            margin-bottom: .16rem;
            .btn-list{
                font-weight: 400;
                float: right;
                text-align: center;
                font-size: 0.15rem;
                .btn{
                    width: .44rem;
                    height: .24rem;
                    line-height: .24rem;
                    border-radius: .24rem;
                    background-color: #fff;
                    margin-left: .16rem;
                    display: inline-block;
                    &.status{
                        background-color: #CCA66B;
                        color: #fff;

                    }
                }
            }
        }
        .detail-list{
            width: 100%;
            .panel-item{
                &:last-child{
                    margin-bottom: 0;
                }
            }
            .item{
                width: 100%;
                border-radius: 0.08rem;
                background-color: #FAFAFA;
                padding: .20rem .16rem .16rem;
                margin-bottom: 0.16rem;
                .title{
                    height: .3rem;
                    line-height: .3rem;
                    margin-bottom: 0.19rem;
                    font-size: .15rem;
                    .left{
                        color: #000;
                        .flag{
                            width: .44rem;
                            height: .24rem;
                            line-height: .24rem;
                            border-radius: .24rem;
                            border: 1px solid #CCA66B;
                            color: #CCA66B;
                            background-color: #fff;
                            margin-right: 0.08rem;
                            text-align: center;
                            display: inline-block;
                            &.status{
                                border: 1px solid #CCA66B;
                                color: #fff;
                                background-color: #CCA66B;
                            }
                        }
                    }
                    .right{
                        float: right;
                        &.success{
                            color: #11D08B;
                        }
                        &.error{
                            color: #FF5C3F;
                        }
                        &.wait{
                            color: #CCA66B;
                        }
                    }
                }
                .info{
                    width: 100%;
                    border-top: 1px solid #f1e9e9;
                    font-size: 0.15rem;
                    color: #A4A9B1;
                    padding-top: 0.05rem;
                    .row{
                        margin-top: 0.08rem;
                        .text{
                            width: .90rem;
                            height: .25rem;
                            text-align: justify;
                            display: inline-block;
                            vertical-align: top;
                            &:after {
                                content: " ";
                                display: inline-block;
                                width: 100%;
                                height: 0px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>