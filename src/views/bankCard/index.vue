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
                background:linear-gradient(135deg,rgba(246,168,59,1) 0%,rgba(240,134,66,1) 100%);
                box-shadow:0px 2px 8px 0px rgba(231,91,0,0.5);
                border-radius: 0.08rem;
                padding: .20rem .16rem;
                color: #fff;
                position: relative;
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
            }
        }
    }
</style>