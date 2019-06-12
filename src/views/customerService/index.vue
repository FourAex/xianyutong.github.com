<template>
    <div class="customer-service">
        <p class="title">微信客服</p>
        <ul class="list clearfloat">
            <li class="item">
                <img src="../../assets/img/my_5_wx@3x.png" class="icon" alt="">
                <span class="numbher">12332145665</span>
                <span class="btn">复制</span>
            </li>
            <li class="item">
                <img src="../../assets/img/my_5_wx@3x.png" class="icon" alt="">
                <span class="numbher">12332145665</span>
                <span class="btn">复制</span>
            </li>
            <li class="item">
                <img src="../../assets/img/my_5_wx@3x.png" class="icon" alt="">
                <span class="numbher">12332145665</span>
                <span class="btn">复制</span>
            </li>
        </ul>
        <p class="title">QQ客服</p>
        <ul class="list clearfloat">
            <li class="item">
                <img src="../../assets/img/my_5_qq@3x.png" class="icon" alt="">
                <span class="numbher">12332145665</span>
                <span class="btn">复制</span>
            </li>
            <li class="item">
                <img src="../../assets/img/my_5_qq@3x.png" class="icon" alt="">
                <span class="numbher">12332145665</span>
                <span class="btn">复制</span>
            </li>
            <li class="item">
                <img src="../../assets/img/my_5_qq@3x.png" class="icon" alt="">
                <span class="numbher">12332145665</span>
                <span class="btn">复制</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "customerService"
  }
</script>

<style lang="less" scoped>
    .customer-service{
        width: 100%;
        padding: .32rem .16rem 0;
        .title{
            color: #000;
            font-size: .15rem;
        }
        .list{
            width: 100%;
            padding: 0 .24rem;
            font-size: .15rem;
            margin-bottom: .32rem;
            .item{
                width: 100%;
                height: .48rem;
                line-height: .36rem;
                margin-top: .24rem;
                position: relative;
                border-bottom: 1px solid #F1EDE6;
                padding: 0 0 0.11rem .32rem;
                &:last-child{
                    border-bottom: none;
                }
                .icon{
                    width: .24rem;
                    height: .24rem;
                    position: absolute;
                    left: 0;
                    top: 0.06rem;
                }
                .btn{
                    width: .60rem;
                    height: .36rem;
                    line-height: .36rem;
                    background-color: #FFF7EB;
                    color: #CCA66B;
                    text-align: center;
                    border-radius: .36rem;
                    float: right;
                }
            }
        }
    }
</style>