<template>
    <div class="balance-out">
        <div class="input-panel">
            <p class="row">
                <span class="title">转账金额(￥)</span>
                <input placeholder="0.00" class="input money" type="number">
            </p>
            <p class="row">
                <span class="title">卡号</span>
                <input placeholder="请输入银行卡号" class="input" type="number">
            </p>
            <p class="row">
                <span class="title">开户行</span>
                <input placeholder="请输入开户银行" class="input" type="text">
            </p>
            <p class="row">
                <span class="title">姓名</span>
                <input placeholder="请输入持卡人姓名" class="input" type="text">
            </p>
        </div>
        <div @click="goToResult" class="submit-btn">提交申请</div>
    </div>
</template>

<script>
  export default {
    name: "balanceOut",
    methods: {
      goToResult(){
        this.$router.push('./balanceResult');
      }
    }
  }
</script>

<style lang="less" scoped>
    .balance-out{
        width: 100%;
        padding: 0.16rem;
        position: relative;
        display: flex;
        flex-direction: column;
        .input-panel{
            width: 100%;
            margin-top: .6rem;
            flex: 1;
            .row{
                height: .50rem;
                display: flex;
                flex-wrap: nowrap;
                padding-bottom: .16rem;
                margin-bottom: .2rem;
                position: relative;
                .title{
                    font-size: .15rem;
                    line-height: .50rem;
                    color: #999;
                }
                .input{
                    flex: 1;
                    height: .50rem;
                    padding: .16rem 0 .16rem 0;
                    line-height: .18rem;
                    background-color: #fff;
                    text-align: right;
                    outline: none;
                    border: none;
                    font-size: .18rem;
                    color: #000;
                    text-indent: .4rem;
                    -webkit-tap-highlight-color: transparent;
                    &.money{
                        position: absolute;
                        right: 0;
                        bottom: -0.04rem;
                        height: .68rem;
                        line-height: .36rem;
                        font-size: .36rem;
                        padding: .20rem 0;
                        width: 70%;
                    }
                }
                &:after{
                    content: " ";
                    display: block;
                    width: 100%;
                    height: 1px;
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
        .submit-btn{
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            border-radius: .5rem;
            background: linear-gradient(90deg,rgba(219,184,131,1) 0%,rgba(204,166,107,1) 100%);
            box-shadow: 0px 5px 10px rgba(213, 183, 154, 0.5);
            text-align: center;
            font-size: .16rem;
            font-weight: 600;
            color: #fff;
        }
    }

</style>