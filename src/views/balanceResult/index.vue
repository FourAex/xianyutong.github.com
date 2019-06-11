<template>
    <div class="balance-result">
        <div class="content">
            <img src="../../assets/img/yitijiao@3x.png" class="icon" alt="">
            <p class="title">
                已提交申请
            </p>
            <p class="tips">
                工作人员将在1~3小时内完成审核!
            </p>
            <div @click="goToFunds" class="btn">我知道了</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "balanceResult",
    methods: {
      goToFunds(){
        this.$router.push('./funds');
      }
    }
  }
</script>

<style lang="less" scoped>
    .balance-result{
        width: 100%;
        height: 100%;
        position: relative;
        padding: 1.08rem .24rem 0;
        .content{
            text-align: center;
            .icon{
                display: block;
                width: .48rem;
                height: .48rem;
                margin: 0 auto;
            }
            .title{
                margin: .16rem auto 0.08rem;
                font-size: 0.2rem;
                color: #CCA66B;
            }
            .tips{
                font-size: 0.12rem;
                color: #ccc;
            }
            .btn{
                width: 1.5rem;
                height: .5rem;
                line-height: .5rem;
                font-size: .16rem;
                color: #CCA66B;
                margin: 0.64rem auto 0;
                background-color: #FFF7EB;
                border-radius: .5rem;
            }
        }
    }
</style>