<template>
    <div class="binding-result">
        <div class="content">
            <img :src="result ? successImg : errorImg" class="icon" alt="">
            <p :class="result ? '' : 'error'" class="title">
                {{result ? '已提交审核!' : '抱歉，审核未通过!'}}
            </p>
            <p class="tips">
                {{result ? '工作人员将在24小时内完成审核，请耐心等待!' : '请确认信息后再次提交审核，谢谢!'}}
            </p>
            <div @click="goToAccountDetails" :class="result ? '' : 'error'" class="btn">知道了</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "bindingResult",
    data(){
      return{
        result: this.$route.query.result,
        successImg: require('../../assets/img/yitijiao@3x.png'),
        errorImg: require('../../assets/img/shibai@3x.png'),
      }
    },
    methods: {
      goToAccountDetails(){
        this.$router.push('./accountDetails');
      }
    }
  }
</script>

<style lang="less" scoped>
    .binding-result{
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
                &.error{
                    color: #FF5C3F;
                }
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
                &.error{
                    color: #FF5C3F;
                }
            }
        }
    }

</style>