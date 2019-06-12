<template>
    <div class="balance-enter">
        <div class="content">
            <div class="info">
                <div class="left">
                    <span class="title">招商银行</span>
                    <div class="des">*琦雷-四川成都支行</div>
                </div>
                <div class="right">
                    <span class="hide">****</span>
                    1234
                </div>
                <p class="tips">通过银行转账时必需备注您的全民付ID号，以便确认转账</p>
            </div>
            <div class="input-panel">
                <p class="row">
                    <span class="title">转账金额(￥)</span>
                    <input placeholder="0.00" class="input money" type="number">
                </p>
                <p class="row">
                    <span class="title">转账人</span>

                    <input placeholder="请输入转账人姓名" class="input" type="text">
                </p>
                <p class="row date">
                    <span class="title">转账时间</span>
                    <input v-model="selectDate" readonly @focus="openPicker" placeholder="请选择时间" class="input" type="text">
                    <img src="../../assets/img/back.png" class="icon" />
                </p>
            </div>
        </div>

        <div @click="goToResult" class="submit-btn">提交申请</div>

        <mt-datetime-picker
                ref="picker"
                type="datetime"
                v-model="pickerVisible"
                @confirm="handleConfirm">
        </mt-datetime-picker>
    </div>
</template>

<script>

  Date.prototype.Format = function (fmt) { //author: meizz
    let o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "H+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  export default {
    name: "balanceEnter",
    data(){
      return{
        pickerVisible: '',
        selectDate: ''
      }
    },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      goToResult(){
        this.$router.push('./balanceResult');
      },
      handleConfirm(date){
        this.selectDate = new Date(date).Format('yyyy-MM-dd HH:mm:ss');
      }
    }
  }
</script>

<style lang="less" scoped>
    .balance-enter {
        width: 100%;
        padding: 0.16rem;
        position: relative;
        display: flex;
        flex-direction: column;
        .content{
            flex: 1;
        }
        .info{
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
            .tips{
                width: 100%;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: .16rem;
                color:rgba(255,255,255,.5);
                font-size: .12rem;
                text-align: center;
            }
        }
        .input-panel{
            width: 100%;
            margin-top: .6rem;
            .row{
                height: .50rem;
                display: flex;
                flex-wrap: nowrap;
                padding-bottom: .16rem;
                margin-bottom: .2rem;
                position: relative;
                &.date{
                    input{
                        padding-right: .3rem;
                    }
                    .icon{
                        width: .2rem;
                        width: .2rem;
                        position: absolute;
                        right: 0.02rem;
                        top: 50%;
                        transform: translateY(-50%) rotateZ(-90deg);
                        transform-origin: center;
                    }
                }
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