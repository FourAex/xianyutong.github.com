<template>
    <div class="order-details">
        <div class="top">
            <p class="title">
                已完成
            </p>
        </div>
        <div class="content">
            <div class="order-info">
                <p class="row"><span>收单号码: </span> 10554534654655</p>
                <p class="row"><span>收单金额: </span> ￥100.00</p>
                <p class="row"><span>暂扣余额: </span> ￥10.00</p>
                <p class="row"><span>实际金额: </span> ￥100.00</p>
                <p class="row"><span>收单状态: </span> 交易完成</p>
            </div>
            <div class="timeline">
                <p class="title">交易时间轴</p>
                <ul class="list clearfloat">
                    <li class="item">
                        <span class="text">创建收单: </span>
                        <span class="time">2018-10-12 12:22:34</span>
                    </li>
                    <li class="item">
                        <span class="text">扣取保证金: </span>
                        <span class="time">2018-10-12 12:22:34</span>
                    </li>
                    <li class="item">
                        <span class="text">交易完成: </span>
                        <span class="time">2018-10-12 12:22:34</span>
                    </li>
                    <li class="item">
                        <span class="text">交易取消: </span>
                        <span class="time">2018-10-12 12:22:34</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "orderDetails"
  }
</script>

<style lang="less" scoped>
    .order-details{
        width: 100%;
        background-color: #FAFAFA;
        .top{
            width: 100%;
            height: 1rem;
            background-color: #11D08B;
            padding: .16rem;
            .title{
                font-size: .18rem;
                color: #fff;
                &:before{
                    content: ' ';
                    width: .16rem;
                    height: .16rem;
                    border-radius: 50%;
                    background-color: transparent;
                    border: 0.02rem solid #fff;
                    display: inline-block;
                    vertical-align: middle;
                    transform: translateY(-0.015rem);
                    font-size: 0;
                    margin-right: 0.1rem;
                }
            }
        }
        .content{
            margin-top: -0.5rem;
            padding: 0 .16rem;
            .order-info, .timeline{
                background-color: #fff;
                border-radius: .08rem;
                margin-bottom: .15rem;
                padding: .16rem;
            }
            .order-info{
                font-size: .15rem;
                color: #A4A9B1;
                .row{
                    height: .26rem;
                    line-height: .26rem;
                    span{
                        color: #000;
                    }
                }
            }
            .timeline{
                font-size: .15rem;
                .title{
                    font-weight: bold;
                    color: #000;
                    margin-bottom: .16rem;
                }
                .list{
                    border-left: 1px solid #EEEEEE;
                    .item{
                        width: 100%;
                        position: relative;
                        height: .30rem;
                        line-height: .30rem;
                        padding-left: .2rem;
                        color: #A4A9B1;
                        &:before{
                            content: ' ';
                            position: absolute;
                            left: -0.06rem;
                            top: 50%;
                            transform: translateY(-50%);
                            width: .12rem;
                            height: .12rem;
                            background-color: #eee;
                            border-radius: 50%;
                            overflow: hidden;
                        }
                        .text{
                            width: .90rem;
                            height: .30rem;
                            text-align: justify;
                            display: inline-block;
                            vertical-align: top;
                            color: #000;
                            margin-right: 0.1rem;
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