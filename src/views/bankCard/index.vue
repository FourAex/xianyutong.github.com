<template>
    <div class="bank-card">
        <ul class="card-list">
            <li class="card-item">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
            </li>
            <li class="card-item">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
            </li>
            <li class="card-item">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
            </li>
            <li class="card-item">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
            </li>
            <li class="card-item">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
            </li>
            <li class="card-item">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "bankCard"
  }
</script>

<style lang="less" scoped>
    .bank-card{
        width: 100%;
        padding: 0.16rem;
        position: relative;
        display: flex;
        .card-list{
            height: 100%;
            overflow-y: auto;
            .card-item{
                width: 3.43rem;
                height: 1.70rem;
                border-radius: 0.08rem;
                padding: .20rem .16rem;
                color: #fff;
                position: relative;
                margin-top: -0.9rem;
                .left{
                    float: left;
                    .des{
                        font-size: .12rem;
                    }
                    .title{
                        font-size: .2rem;
                    }
                }
                .right{
                    float: right;
                    font-size: .24rem;
                    .hide{
                        font-size: .18rem;
                        color:rgba(255,255,255,.5);
                    }
                }
                &:first-child{
                    margin-top: 0;
                }
                &:nth-child(4n+1){
                    background:linear-gradient(135deg,rgba(246,168,59,1) 0%,rgba(240,134,66,1) 100%);
                    box-shadow:0px 2px 8px 0px rgba(231,91,0,0.5);
                }
                &:nth-child(4n+2){
                    background:linear-gradient(135deg,rgba(57,141,206,1) 0%,rgba(59,98,188,1) 100%);
                    box-shadow:0px 2px 8px 0px rgba(26,79,205,0.5);
                }
                &:nth-child(4n+3){
                    background:linear-gradient(135deg,rgba(254,117,101,1) 0%,rgba(247,82,93,1) 100%);
                    box-shadow:0px 2px 8px 0px rgba(237,27,43,0.5);
                }
                &:nth-child(4n+4){
                    background:linear-gradient(135deg,rgba(0,171,153,1) 0%,rgba(2,135,172,1) 100%);
                    box-shadow:0px 2px 8px 0px rgba(0,98,125,0.5);
                }
            }
        }
    }
</style>