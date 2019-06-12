<template>
    <div class="order-panel">
        <div class="nav">
            <span @click="changeNav(index)" v-for="(item,index) in navList" :class="item.status ? 'status' : ''" :key="index" class="item">{{item.title}}</span>
        </div>
        <div class="order-wrap">
            <ul class="order-list">
                <li @click="goToOrderDetails" v-for="(item,index) in list" :key="index" class="item">
                    <p class="title">
                        <span class="left">
                            <span class="text">实际付款: </span>
                            <span class="money">￥100.00</span>
                         </span>
                        <span v-if="item.flag !== 1" :class="item.flag === 2 ? 'wait' : 'error' " class="right">{{item.flagText}}</span>
                        <img v-else src="../../assets/img/my_2_yiwancheng@3x.png" class="icon" alt="">
                    </p>
                    <div class="info">
                        <p class="row"><span class="text">收单号码:</span> 21312434322222</p>
                        <p class="row"><span class="text">收单时间:</span> 2018-03-01 14:13:12</p>
                        <p class="row"><span class="text">收单金额:</span> ￥100.00</p>
                        <p class="row"><span class="text">暂扣余额:</span> ￥10.00</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return{
        navList: [
          {
            status: true,
            title: '今日'
          },
          {
            status: false,
            title: '七日'
          },
          {
            status: false,
            title: '全部'
          },
        ],
        list: [
          {
            flag: 1,
            flagText: '已完成',
            status: 1
          },
          {
            flag: 2,
            flagText: '等待交易',
            status: 0
          },
          {
            flag: 3,
            flagText: '交易失败',
            status: 1
          },
          {
            flag: 2,
            flagText: '等待交易',
            status: 0
          },
          {
            flag: 3,
            flagText: '交易失败',
            status: 1
          },
        ]
      }
    },
    methods: {
      changeNav(index){
        this.navList.forEach((item,i) => {
          item.status = i === index;
        })
      },
      goToOrderDetails(){
        this.$router.push('/orderDetails')
      }
    }
  }
</script>

<style lang="less" scoped>
    .order-panel{
        width: 100%;
        overflow-y: hidden;
        display: flex;
        flex-direction: column;
        .nav{
            width: 100%;
            border-bottom: 1px solid #EEEEEE;
            display: flex;
            justify-content: space-around;
            .item{
                font-size: .15rem;
                border-bottom: .04rem solid #fff;
                padding: .22rem 0 .08rem;
                &.status{
                    color: #CCA66B;
                    border-bottom-color: #CCA66B;
                }
            }
        }
        .order-wrap{
            flex: 1;
            padding: .16rem;
            background-color: #fff;
            overflow: hidden;
            .order-list{
                height: 100%;
                overflow: hidden;
                overflow-y: auto;
                .item{
                    width: 100%;
                    border-radius: 0.08rem;
                    background-color: #FAFAFA;
                    padding: .20rem .16rem .16rem;
                    margin-bottom: 0.16rem;
                    position: relative;
                    .icon{
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: .88rem;
                        height: .64rem;
                    }
                    .title{
                        height: .3rem;
                        line-height: .3rem;
                        margin-bottom: 0.19rem;
                        font-size: .15rem;
                        .left{
                            .text{
                                font-weight: bold;
                                color: #000;
                            }
                            .money{
                                color: #FF5C3F;
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
    }
</style>